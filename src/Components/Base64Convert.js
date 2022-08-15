import React, { useState } from "react";
import { StyleSheet, Text, View, Button } from 'react-native';
import { Image } from 'react-native-elements';
import j1 from '../j1.jpg';
import j2 from '../j2.jpg';
import imageToBase64 from 'image-to-base64/browser';
import axios from "axios";
export default function Base64Convert() {

    const [isLoaded, setIsLoaded] = useState(false);
    const [base64, setBase64] = useState("wooo");
    const [pic2base64, setpic2base64] = useState();
    const [result, setResult] = useState();

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

        imageToBase64("../j2.jpg") // Path to the image
            .then(
                (response) => {
                    console.log(response); // "cGF0aC90by9maWxlLmpwZw=="
                    setpic2base64(response);
                    setIsLoaded(true);
                }
            )
            .catch(
                (error) => {
                    console.log(error); // Logs an error if there was one
                }
            )


    }

    const submitToAPI = () => {
        axios({
            method: 'post',
            url: "http://127.0.0.1:5000/picToBase64",
            headers: {},
            data: {
                pic1base64: base64,
                pic1ID: "1",
                pic2base64: pic2base64,
                pic2ID: "2"
            }
        }).then((res) => {
            //please wait for the windows prompt for guidance 
            alert("File Upload success");
            setResult(res)
        })
            .catch((err) => alert("File Upload Error"));;
    }


    return (
        <View style={styles.container}>
            <View>
                <Text>Pic 1</Text>
                <Image
                    style={styles.a1}
                    source={require('../j1.jpg')}
                />
            </View>
            <View>
                <Text>Pic 2</Text>
                <Image
                    style={styles.a1}
                    source={require('../j2.jpg')}
                />
            </View>

            <Button title="Convert to Digits" onPress={photoToBase64} />
            <Text style={styles.resultBox}>
                <Text>PIC 1 : </Text>
                {isLoaded ? base64 : "Results are not loaded"}
            </Text>
            <Text style={styles.resultBox}>
                <Text>PIC 2 : </Text>
                {isLoaded ? pic2base64 : "Results are not loaded"}
            </Text>
            <Button title="SENT TO API" onPress={submitToAPI}/>
            <View>
                <Text>
                    Results :
                    {result}
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
    a1: {
        width: 150,
        height: 150,
    },
    resultBox: {
        width: 450,
        height: 400,
        overflow: "auto"
    }
});
