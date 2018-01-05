import {combineReducers} from 'redux'
import filesReducer from './filesReducer'
import uploadReducer from './uploadReducer'

let reducer = combineReducers({
	files:filesReducer,
	upload:uploadReducer
})

export default reducer