import React, {useEffect, useState} from "react";
import {Button, TextInput} from "react-native-paper";
import {View, StyleSheet} from 'react-native';
import Box from "./commonComponents/Box";
import {DatePickerFieldComponent} from "./commonComponents/DatePickerCustom";
import {setFormInfo} from "../redux/actions/formActions";
import {formSelector} from "../redux/selectors";
import {useSelector} from "react-redux";
import {fetchLoanValues} from "../redux/actions/loanActions";
import { Formik, useFormikContext } from "formik";
import * as yup from 'yup';

export default function FormComponent(props){
    const [isDatePickerOpened, setDatePicker] = useState(false);
    const form = useSelector(formSelector);

    const handleSubmit = (values) => {
        fetchLoanValues();
    }
    return <View>
        <Formik
            initialValues={{...form}}
            onSubmit={handleSubmit}
            validationSchema={formValidationSchema}
        >
            {({handleChange, handleBlur, handleSubmit, values, errors, setFieldValue}) => (
                <>
                    <Box>
                        <TextInput
                            keyboardType='phone-pad'
                            label='Loan Value'
                            mode='outlined'
                            onChangeText={handleChange('loanValue')}
                            onBlur={handleBlur('loanValue')}
                            value={values.loanValue}
                            error={errors.loanValue}
                            {...errors.loanValue ? { label: 'Loan value is not valid'} : {}}
                        />
                    </Box>
                    <Box>
                        <TextInput
                            label='Time in years'
                            keyboardType='phone-pad'
                            mode='outlined'
                            onChangeText={value => {
                                const monthsVal = value ? (value * 12) : '';
                                handleChange('timeYears')(value);
                                setFieldValue('timeMonths', monthsVal.toString());
                            }}
                            onBlur={(e) => {
                                const monthsVal = values.timeYears ? (values.timeYears * 12) : '';
                                handleBlur('timeYears')(e);
                                setFieldValue('timeMonths', monthsVal.toString());
                            }}
                            value={values.timeYears}
                            error={errors.timeYears}
                            {...errors.timeYears ? { label: 'This is not valid'} : {}}
                        />
                    </Box>
                    <Box>
                        <TextInput
                            label='Time in months'
                            keyboardType='phone-pad'
                            mode='outlined'
                            onChangeText={value => {
                                const yearsVal = value ? Math.floor(value / 12) : '';
                                handleChange('timeMonths')(value);
                                setFieldValue('timeYears', yearsVal.toString());
                            }}
                            onBlur={(e) => {
                                const yearsVal = values.timeMonths ? Math.floor(values.timeMonths / 12) : '';
                                handleBlur('timeMonths')(e);
                                setFieldValue('timeYears', yearsVal.toString());
                            }}
                            value={values.timeMonths}
                            error={errors.timeMonths}
                            {...errors.timeMonths ? { label: 'This is not valid'} : {}}
                        />
                    </Box>
                    <Box>
                        <TextInput
                            label='Interest rate per year'
                            mode='outlined'
                            keyboardType='phone-pad'
                            onChangeText={handleChange('interestRate')}
                            onBlur={handleBlur('interestRate')}
                            value={values.interestRate}
                            error={errors.interestRate}
                            {...errors.interestRate ? { label: 'This is not valid'} : {}}
                        />
                    </Box>
                    <Box>
                        <DatePickerFieldComponent
                            onChange={e => {
                                setFieldValue('dateStart', e);
                            }}
                            value={values.dateStart}
                        />
                    </Box>
                    <Box>
                        <Button
                            mode='contained'
                            icon='calculator'
                            onPress={handleSubmit}
                        >Calculate</Button>
                    </Box>
                    <HandleFormikValueChanges />
                </>
            )}
        </Formik>
    </View>
}

const styles = StyleSheet.create({

});

const formValidationSchema = yup.object().shape({
    loanValue: yup.number().required(),
    interestRate: yup.number().required(),
    timeYears: yup.number(),
    timeMonths: yup.number()
})

function HandleFormikValueChanges(props){
    const {values, errors} = useFormikContext();
    const handleForm = React.useCallback(() => {
        setFormInfo({...values});
    }, [values])

    useEffect(() => {
        handleForm();
    }, [values]);
    return <></>;
}