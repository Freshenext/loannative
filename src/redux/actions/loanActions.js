import store, {dispatch} from "../store";
import axios from "axios";
import {convertAxiosError} from "../../utils/utils";
import * as loanConstants from './../constants/loanConstants'

const getFormInfo = () => {
    return store.getState().form;
}

export const fetchLoanValues = () => {
    const {
        timeMonths: months,
        loanValue,
        interestRate
    } = getFormInfo();
    setLoading(true);
    return axios.get(`https://loanapi.francis.center/months/${months}`, { params: {
            loanValue,
            interestRate
        }})
        .then(({ data }) => {
            dispatch({
                type: loanConstants.SET_LOAN_INFO,
                payload: data
            })
        })
        .catch(err => {
            convertAxiosError(err);
        })
        .finally(_ => setLoading(false));
}

export const setLoading = (loading = false) => {
    dispatch({
        type: loanConstants.SET_LOAN_LOADING,
        payload: loading
    })
}