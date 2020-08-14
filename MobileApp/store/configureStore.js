
import addCatReducer from "../reducers/AddCat";
import promise from 'redux-promise'
import {createStore,combineReducers} from 'redux'
import {applyMiddleware} from 'redux'

const rootReducer=combineReducers(
    {addCat:addCatReducer}
)
const configureStore=()=>{
return createStore(rootReducer,applyMiddleware(promise));
}
export default configureStore;