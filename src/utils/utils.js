import {setSnackbarMessage, setSnackbarMessageTimed} from "../redux/actions/globalSnackbarActions";

export const convertAxiosError = (AxiosError) => {
    let message = AxiosError.message;
    if(AxiosError.response)
        message += `: ${AxiosError.response.data}`;

    console.log(message);
    setSnackbarMessageTimed(message, 'error');
    return message;
}