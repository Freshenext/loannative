import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, SafeAreaView } from 'react-native';
import {Provider} from "react-redux";
import store from "./src/redux/store";
import {Provider as PaperProvider} from 'react-native-paper';
import HomeScreen from "./src/screens/HomeScreen";
import MainContainer from "./src/components/MainContainer";

export default function App() {
  return (
      <Provider store={store}>
        <PaperProvider>
            <MainContainer />
        </PaperProvider>
      </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
