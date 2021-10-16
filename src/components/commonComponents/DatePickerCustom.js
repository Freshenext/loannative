import React, {useState} from "react";
import DateTimePicker from '@react-native-community/datetimepicker';
import {Button, TextInput} from "react-native-paper";
import {TouchableOpacity} from "react-native";
import moment from 'moment';


function DatePickerCustom({ open, value, hideDatePicker = () => {}, onDateChange = () => {} }){

    if(!open)
        return <></>;

    /* convert value to date */
    const handleChange = ({ type }, selectedDate) => {
        if(type === 'dismissed'){
            hideDatePicker();
            return;
        }
        // selectedDate.setMinutes(selectedDate.getMinutes() + selectedDate.getTimezoneOffset())
        onDateChange(moment(selectedDate).toDate());
        hideDatePicker();
    }
    return <DateTimePicker
        mode='date'
        onChange={handleChange}
        value={new Date(Date.parse(value))}
    />
}

export function DatePickerFieldComponent({ opened = false, onChange, value }){
    const [open, setOpen] = useState(opened);

    return React.useMemo(() => (
        <>
            <TouchableOpacity
                onPress={() => setOpen(true)}
            >
                <TextInput
                    label='Date'
                    value={value.toISOString().split('T')[0]}
                    mode='outlined'
                    disabled={true}
                />
            </TouchableOpacity>
            <DatePickerCustom
                open={open}
                hideDatePicker={() => setOpen(false)}
                onDateChange={onChange}
                value={value}
            />
        </>

    ), [open])}