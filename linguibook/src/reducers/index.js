import { combineReducers } from 'redux'
import localStorage from './localStorage'
import vocabulariesStorage from './vocabulary'

export default combineReducers({
    localStorage,
    vocabulariesStorage
})