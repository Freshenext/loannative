import GlobalSnackbar from "./commonComponents/GlobalSnackbar";
import HomeScreen from "../screens/HomeScreen";
import React from "react";
import {SafeAreaView} from "react-native";

export default function MainContainer(){
    return <SafeAreaView style={{ flex: 1}}>
        <HomeScreen />
        <GlobalSnackbar />
    </SafeAreaView>
}