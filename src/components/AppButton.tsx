import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import Colors from '../utils/Colors';

// Props 
interface Props {
    text: string;
    onPress?: any;
    style?: any;
    textStyle?: any
}

/** AppButton */
export const AppButton = (props: Props) => {
    return (
        <View style={styles.container}>
        <TouchableOpacity onPress={props.onPress} style={[styles.appButtonContainer,[props.style]]}>
            <Text style={[styles.appButtonText, [props.textStyle]]}>{props.text}</Text>
        </TouchableOpacity>
     </View>
    )
}

/** StyleSheet */
const styles = StyleSheet.create({
    container: {
        paddingVertical: 5
    },
    appButtonContainer: {
        elevation: 8,
        borderTopColor:Colors.Pink,
        borderBottomColor:Colors.Pink,
        borderWidth:1,
        backgroundColor: Colors.Blue,
        paddingVertical: 10,
        paddingHorizontal: 10
    },
    appButtonText: {
        fontSize: 18,
        color: Colors.Pink,
        fontWeight: "bold",
        alignSelf: "center",
        textTransform: "uppercase"
    }
});

export default AppButton;
