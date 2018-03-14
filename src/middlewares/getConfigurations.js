import ConfigurationsService from './../services/configurations.service'
import CacheUtils from '../utils/cacheUtils'
import {defaultConfig} from './../common/constants'

export default function getConfigurations ({dispatch}) {
  const fetchConfig = new ConfigurationsService(dispatch)
    .getConfigurations()
    .map(resp => resp.data)
    .map(({ configurations }) =>
                  				(configurations &&
                  					configurations.reduce((acc, cur) => ({ ...acc, ...{ [cur.key]: cur.value } }), {})) ||
                  				{})
    .map(config => useDataConfigDefault(
      mapObjectResponseToLocalConfig(config))
    )
    .map(configurations => ({data: configurations}))

    //caching data to local store
  return CacheUtils.handleRequest(fetchConfig, CacheUtils.LOCAL_STORAGE_KEY_GET_DATA_CONFIG)
}

const mapObjectResponseToLocalConfig = (config) => ({
  configurations: {
      data_1: config['data_1'] || "data1",
      data_2: Number(config['data_2']) || 222,
      data_3: Number(config['data_3']) || 333
  }
})

const useDataConfigDefault = (config = defaultConfig) => config
