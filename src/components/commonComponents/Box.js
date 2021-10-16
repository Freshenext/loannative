import React from "react";
import { StyleSheet, View } from "react-native";

export default function Box({ children, style = {}, ...rest }){
    const styles = {
        paddingHorizontal: 3,
        marginHorizontal: 10,
        marginBottom: 10,
        marginTop: 5,
        ...style
    }
    return <View style={styles}>
        {children}
    </View>
}