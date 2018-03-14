import { compose, createStore, applyMiddleware } from 'redux'
import { createEpicMiddleware } from 'redux-observable'
import logger from 'redux-logger'

import rootReducer from './reducers/root.reducer'
import rootEpic from './middlewares/root.epic'

//load data from REST API
const epicMiddleware = createEpicMiddleware(rootEpic)

export const store = createStore(
    rootReducer,
    undefined,
    compose(
      (process.env.NODE_ENV === 'production' &&
        applyMiddleware(epicMiddleware)) ||
        applyMiddleware(epicMiddleware, logger)
    )
)

const configureStore = () => new Promise((resolve, reject) => {
  try {
    resolve(store)
  } catch (e) {
    reject(e)
  }
})

export default configureStore
