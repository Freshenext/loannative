import React from "react";
import { useSelector } from "react-redux";
import {FlatList, View} from "react-native";
import {ActivityIndicator, List} from "react-native-paper";
import QuoteItem from "./QuoteItem";

export default function LoanPaymentsContainer(){
    const { calendarMonths, isLoading } = useSelector(state => state.loan);
    if(isLoading)
        return <ActivityIndicator />

    return <FlatList
        data={calendarMonths}
        renderItem={({index, item: quote}) => (
            <QuoteItem key={index} index={index} {...quote} />
        )}
        keyExtractor={item => item.index.toString()}
    />
}