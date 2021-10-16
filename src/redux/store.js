import {createStore, compose, combineReducers} from "redux";
import formReducer from "./reducers/formReducer";
import loanReducer from "./reducers/loanReducer";
import globalSnackbarReducer from "./reducers/globalSnackbarReducer";

const rootReducer = combineReducers({
    form: formReducer,
    loan: loanReducer,
    globalSnackbar: globalSnackbarReducer
});

const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export const dispatch = store.dispatch;
export default store;