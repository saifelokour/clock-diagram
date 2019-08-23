import { combineReducers } from 'redux'
import clock from './clock'
import { connectRouter } from 'connected-react-router'

export default (history) => combineReducers({
  router: connectRouter(history),
  clock
})
