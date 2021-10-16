import * as loanConstants from './../constants/loanConstants';

const initState = {
    calendarMonths: [],
    monthlyPayment: 0,
    totalInterestPaid: 0,
    totalQuotesToPay: 0,
    isLoading: false
}

const loanReducer = (state = initState, { type, payload }) => {
    switch(type){
        case loanConstants.SET_LOAN_INFO:
            return { ...state, ...payload };
        case loanConstants.SET_LOAN_LOADING:
            return { ...state, isLoading: payload}
        default:
            return state;
    }
}

export default loanReducer;