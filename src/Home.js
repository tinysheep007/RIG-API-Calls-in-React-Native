import React from "react";
import { StyleSheet, Text, View, Button, Pressable } from 'react-native';

export default function Home({ navigation }) {
    return (
        <View style={styles.container}>
            <Text style={styles.homeText}>
                This is the home Page
            </Text>

            <Pressable style={styles.button} onPress={() => navigation.navigate('API')}>
                <Text style={styles.buttonText}>Go Test API</Text>
            </Pressable>

            <Pressable style={styles.button} onPress={() => navigation.navigate("Base64Convert")}>
                <Text  style={styles.buttonText}>Go convert photo into base64</Text>
            </Pressable>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    homeText: {
        fontSize: "55px",
        fontWeight: "bold",
        margin: "30px"
    },
    button: {
        margin: "10px",
        backgroundColor:"lightgreen",
        padding:"10px",
        border:"2px solid black" ,
        boxShadow: "10px 5px 5px green"
    },
    buttonText : {
        fontFamily:"roboto",
        fontStyle:"italic"
    }
});
