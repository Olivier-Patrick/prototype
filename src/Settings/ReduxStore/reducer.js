import { combineReducers } from 'redux'
import langReducer from './langReducer'
import adminReducer from './adminReducer'

const rootreducer = combineReducers({
    langReducer: langReducer,
    adminReducer: adminReducer,
})

export default rootreducer