import React, { useEffect, useState } from 'react';
import { render } from 'react-dom';
import { StyleSheet, Text, View, Button } from 'react-native';
import { Input } from 'react-native-elements';
import { ActivityIndicator, ScrollView } from 'react-native';
import { Image } from 'react-native-elements';
import { SafeAreaProvider } from 'react-native-safe-area-context';

let text = "change";

const styles = StyleSheet.create({
    container: {
        paddingTop: 50,
        alignItems: "center"
    },
    tinyLogo: {
        width: 50,
        height: 50,
    },
    logo: {
        width: 66,
        height: 58,
    },
});

// Example posting a local image file (Node.js only):
const fs = require('fs');

const deepai = require('deepai'); // OR include deepai.min.js as a script tag in your HTML

deepai.setApiKey('db75faa2-c245-49bb-81fd-8cc1a61517bf');


export default class API extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            text: "chansadasdasdge", ct: 0, truth: false,
            items: [],
            todos: []
        };
        this.changeText = this.changeText.bind(this);
        this.fetchData = this.fetchData.bind(this);
        this.fetchToDo = this.fetchToDo.bind(this);
        this.clearData = this.clearData.bind(this);
    }

    changeText() {
        this.setState({ text: "clciked", ct: this.state.ct + 1, truth: !this.state.truth, items: [] });
    }

    clearData() {
        this.setState({ todos: [], items: [] })
    }

    fetchData() {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(res => res.json())
            .then(json => {
                this.setState({ items: json, truth: true })
            })
    }

    fetchToDo() {
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then(res => res.json())
            .then(json => this.setState({ todos: json, truth: true }));
    }

    async fetchSimilar() {
        fetch('https://image-compare.hcti.io/api?image_url=https://hcti.io/v1/image/28c381f2-ca52-43de-a984-3b17597a1a7b&other_image_url=https://hcti.io/v1/image/28c381f2-ca52-43de-a984-3b17597a1a7b')
            .then(res => res.json())
            .then(json => console.log(json));
    }


    async comparePhoto() {
        let resp = await deepai.callStandardApi("image-similarity", {
            image1: document.getElementById('pic1'),
            image2: document.getElementById('pic2'),
        });
        console.log(resp);

    }

    async test() {
        let res = await fetch("https://pokeapi.co/api/v2/pokemon/ditto");
        console.log(res);
    }




    render() {

        let sampleClick = "";
        if (this.state.truth) {
            sampleClick = <Text>it's loaded with information down below</Text>;
        }
        else {
            sampleClick = <Text>Not loaded with information</Text>;
        }
        return (
            <ScrollView>
                <SafeAreaProvider>
                    <View>
                        <Image
                            nativeID="pic1"
                            style={styles.tinyLogo}
                            source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }}
                        />
                        <Image
                            className="poop"
                            nativeID="pic2"
                            id="pic2"
                            style={styles.tinyLogo}
                            source={require('./j1.jpg')}
                        />

                        <Text>Image v1</Text>

                        <Image
                            style={styles.tinyLogo}
                            source={require('./j2.jpg')}
                        />
                        <Text>Image v2</Text>
                        <Text>Receving APIs</Text>
                        <Text>Response: {this.state.text} {this.state.ct} {this.state.truth + ""}</Text>
                        <Button title="CLick to get API" onPress={this.changeText} />
                        <Button color="#841584" title="clear" onPress={this.clearData} />
                        <Button title="Get Names" onPress={this.fetchData} />
                        {sampleClick}
                        {this.state.items.map((i, index) => {
                            return <Text key={index}>{index}, {i.name}</Text>
                        })}
                        <Button color="green" title='fetch ToDO' onPress={this.fetchToDo} />
                        {this.state.todos.map((i, index) => {
                            return <Text key={index}>{index}.{i.title}</Text>
                        })}
                        <Button title="image" onPress={this.fetchSimilar} />

                    </View>
                </SafeAreaProvider>
            </ScrollView>


        )
    }
}