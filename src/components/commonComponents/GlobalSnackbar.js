import React from "react";
import {useSelector} from "react-redux";
import {Snackbar} from "react-native-paper";

export default function GlobalSnackbar(){
    const { message, variant } = useSelector(state => state.globalSnackbar);

    let backgroundColor = '';
    if(message === '')
        return <></>

    switch(variant){
        case 'success':
            backgroundColor = 'green';
            break;
        case 'error':
            backgroundColor = 'red';
            break;
        default:
            backgroundColor = 'black';
            break;
    }

    return <Snackbar
        visible={true}
        style={{ backgroundColor: backgroundColor}}
    >
        {message}
    </Snackbar>
}