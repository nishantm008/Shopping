import { combineReducers } from 'redux'
import { userReducer } from './auth'

export default combineReducers({
  user: userReducer
})
