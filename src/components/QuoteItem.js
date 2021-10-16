import React, {useContext, useRef} from "react";
import Box from "./commonComponents/Box";
import {Surface, Text, Title} from "react-native-paper";
import { StyleSheet, View } from "react-native";
import {TouchableOpacity} from "react-native";

export default function QuoteItem({index, monthlyPayment, monthlyCapital, pendingLoanValue, monthlyInterest, ...rest}){
    return <Box style={{ height: 100}}>
        <TouchableOpacity>
            <Surface style={{elevation: 3, height: '100%', padding: 10}}>
                <View style={styles.card}>
                    <View style={styles.numberContainer}>
                        <Title>{index}</Title>
                    </View>
                    <View style={styles.infoContainer}>
                        <Text>Monthly: {monthlyPayment}</Text>
                        <Text>Interest: {monthlyInterest}</Text>
                        <Text>Capital: {monthlyCapital}</Text>
                        <Text>Pending: {pendingLoanValue}</Text>
                    </View>
                </View>
            </Surface>
        </TouchableOpacity>
    </Box>
}

const styles = StyleSheet.create({
    card: {
        flex: 1,
        flexDirection: 'row',
    },
    numberContainer: {
        flexBasis: '15%',
        flexGrow: 1,
        justifyContent: 'center',
    },
    infoContainer: {
        flexBasis: '85%',
        flexGrow: 1,
    },

})