import snackbarConstants from "../constants/snackbarConstants";

const initState = {
    message: '',
    variant: ''
}

const globalSnackbarReducer = (state = initState, { type, payload }) => {
    switch (type){
        case snackbarConstants.SET_SNACKBAR_MESSAGE:
            return { ...payload }
        default:
            return state;
    }
}

export default globalSnackbarReducer;