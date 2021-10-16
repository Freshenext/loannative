import {Appbar} from "react-native-paper";
import React, {useCallback, useContext} from "react";
import {ScrollViewContext} from "../screens/HomeScreen";

export default function AppbarComponent(){
    const refContext = useContext(ScrollViewContext);
    const handleRef = useCallback(
        () => {
            if(refContext.current){
                refContext.current.scrollTo({ x: 0, y: 0, animated: true});
            }
        },
        [refContext],
    );

    return React.useMemo(
        () => (
            <Appbar.Header>
                <Appbar.Action icon='home' onPress={handleRef}/>
                <Appbar.Content title='Loan Calculator'/>
                <Appbar.Action icon='chevron-up-circle' onPress={handleRef}/>
            </Appbar.Header>
        ),
        []
    )
}