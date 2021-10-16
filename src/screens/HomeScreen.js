import React, {useRef} from 'react';
import AppbarComponent from "../components/AppbarComponent";
import FormComponent from "../components/FormComponent";
import LoanPaymentsContainer from "../components/LoanPaymentsContainer";
import {ScrollView} from "react-native";

export const ScrollViewContext = React.createContext(undefined);

export default function HomeScreen(props){
    const scrollRef = useRef(undefined);
    return <ScrollViewContext.Provider value={scrollRef}>
        <AppbarComponent />
            <ScrollView ref={scrollRef}>
                <FormComponent />
                <LoanPaymentsContainer />
            </ScrollView>

    </ScrollViewContext.Provider>
}