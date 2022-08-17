import React from "react";
import { StyleSheet, Text, View, Button, Pressable } from 'react-native';

export default function Home({ navigation }) {
    return (
        <View style={styles.container}>
            <Text style={styles.homeText}>
                This is the home Page
            </Text>

            <Text style={styles.secondText}>
                This is the test ground for experimenting API calls in React Natives!
            </Text>

            <View style={styles.buttonGroup}>
                <Pressable style={styles.button} onPress={() => navigation.navigate('API')}>
                    <Text style={styles.buttonText}>Go Test API</Text>
                </Pressable>

                <Pressable style={styles.button} onPress={() => navigation.navigate("Base64Convert")}>
                    <Text style={styles.buttonText}>Go convert photo into base64</Text>
                </Pressable>
            </View>

            <View style={{margin:"20px",alignContent:"center",}}>
                <Text style={{margin:"auto"}}>
                    Where's the code?
                </Text>
                <Text style={{margin:"10px"}}>
                    https://github.com/tinysheep007/RIG-API-Calls-in-React-Native
                </Text>
            </View>


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
        fontFamily: "roboto",
        margin: "30px"
    },
    button: {
        margin: "10px",
        backgroundColor: "lightgreen",
        padding: "10px",
        border: "2px solid black",
        boxShadow: "10px 5px 5px green"
    },
    buttonText: {
        fontSize:"25px",
        fontFamily: "roboto",
        fontStyle: "italic"
    },
    secondText: {
        fontSize: "20px",
        marginBottom: "20px",
        color: "#545c56"
    },
    buttonGroup: {
        flexDirection:"row"
    }
});
