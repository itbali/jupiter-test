import {combineReducers, legacy_createStore as createStore} from "redux";
import {appReducer} from "./appReducer";

const rootReducer = combineReducers({appReducer})
export const store = createStore(rootReducer)
