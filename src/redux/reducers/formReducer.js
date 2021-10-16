import formConstants from './../constants/formConstants';
import moment from 'moment';

const initState = {
    loanValue: '100',
    timeYears: '1',
    timeMonths: '12',
    interestRate: '10',
    dateStart: moment().toDate()
}

const formReducer = (state = initState, { type, payload }) => {
    switch(type){
        case formConstants.SET_FORM_INFO:
            return {...state, ...payload};
        default:
            return state;
    }
}

export default formReducer;