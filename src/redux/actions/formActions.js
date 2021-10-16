import {dispatch} from "../store";

import formConstants from "../constants/formConstants";

export const setFormInfo = formField => {
    dispatch({ type : formConstants.SET_FORM_INFO, payload : {...formField}});
}