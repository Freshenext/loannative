import { dispatch } from "../store";
import snackbarConstants from "../constants/snackbarConstants";

export const setSnackbarMessage = (message, variant = '') => {
    dispatch({
        type: snackbarConstants.SET_SNACKBAR_MESSAGE,
        payload: { message, variant }
    })
}

export const setSnackbarMessageTimed = (message, variant = '', delayInMs = 6000) => {
    setSnackbarMessage(message, variant);

    setTimeout(() => setSnackbarMessage('', variant), delayInMs);
}