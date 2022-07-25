import React, { useState } from "react";
import { StyleSheet, Text, View, Button } from 'react-native';
import { Image } from 'react-native-elements';

import imageToBase64 from 'image-to-base64/browser';

export default function Base64Convert() {

    const [isLoaded, setIsLoaded] = useState(false);
    const [base64, setBase64] = useState("wooo");

    function photoToBase64() {
        //if you want to test the URL
        //just swap put the path reference
        
        imageToBase64("../j1.jpg") // Path to the image
            .then(
                (response) => {
                    console.log(response); // "cGF0aC90by9maWxlLmpwZw=="
                    setBase64(response);
                    setIsLoaded(true);
                }
            )
            .catch(
                (error) => {
                    console.log(error); // Logs an error if there was one
                }
            )
    }


    return (
        <View style={styles.container}>
            <Image
                style={styles.a1}
                source={require('../j1.jpg')}
            />
            <Button title="Convert to Digits" onPress={photoToBase64} />
            <Text style={styles.resultBox}>
                {isLoaded ? base64 : "Results are not loaded"}
            </Text>
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
    a1: {
        width: 150,
        height: 150,
    },
    resultBox: {
        width:450,
        height:400,
        overflow: "auto"
    }
});
