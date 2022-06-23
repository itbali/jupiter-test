import {combineReducers, legacy_createStore as createStore} from "redux";
import {appReducer} from "./appReducer";

export type rootStateType = ReturnType<typeof rootReducer>

const rootReducer = combineReducers({appReducer})
export const store = createStore(rootReducer)
