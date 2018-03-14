
import {Observable} from 'rxjs'
import {defaultConfig} from '../common/constants'

const CacheUtils = {
    // Cached keys
  LOCAL_STORAGE_KEY_GET_DATA_CONFIG: 'GET_DATA_CONFIG',

    // Utility functions
    /**
     * cachedTimeout value in milliseconds
     */
  getCachedTimeout: cachedData => {
    let config = (cachedData && cachedData.data && cachedData.data.configurations) || []
    return (config && config.timeCaching * 1000) || defaultConfig.timeCaching
  },

  isCachedDataStale: (lastFetched, cachedTimeout = defaultConfig.timeCaching) => {
    if (lastFetched === undefined) return true
        // check whether to perform the async call if the data is older than the allowed limit
    return ((Date.now() - lastFetched > cachedTimeout))
  },

  loadCachedData: cachedKey => {
    let rawCachedData = sessionStorage.getItem(cachedKey)
    return (rawCachedData && JSON.parse(rawCachedData))
  },

  saveDataToCache: (cachedKey, data) => {
    sessionStorage.setItem(
            cachedKey,
            JSON.stringify(data)
        )
  },

    /**
     * Utility function for handling request from server:
     *  - Return Observable of cached data if it's available and still is up-to-date.
     *  - Return Observable of new data from API if it's not available or data is stale (outdated).
     * @param: requestObservable is an Observable that trigger an api call from BaseService
     * @param: cachedKey is the key of the service that would be called for caching
     *
     */
  handleRequest: (requestObservable, cachedKey) => {
    	let cachedData = CacheUtils.loadCachedData(cachedKey)
    let lastFetched = cachedData && cachedData.lastFetched
    let localConfigurationsData = CacheUtils.loadCachedData(CacheUtils.LOCAL_STORAGE_KEY_GET_DATA_CONFIG)
    let cachedDataObservable = CacheUtils.isCachedDataStale(lastFetched, CacheUtils.getCachedTimeout(localConfigurationsData))
            ? Observable.empty() : Observable.of(cachedData)
    	return (
    		Observable.concat(
    			cachedDataObservable,
    			requestObservable
                    .map(resp => resp.data)
                    .map(data => ({data, lastFetched: Date.now()}))
                    .do(data => CacheUtils.saveDataToCache(cachedKey, data))
                    .catch(throwable => [])
    		)
    		.first()
    	)
  }
}

export default CacheUtils
