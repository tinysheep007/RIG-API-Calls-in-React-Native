import React, { useEffect, useState } from 'react';
import { render } from 'react-dom';
import { StyleSheet, Text, View, Button } from 'react-native';
import { Input } from 'react-native-elements';
import { ActivityIndicator, ScrollView } from 'react-native';
import { Image } from 'react-native-elements';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import j1 from './j1.jpg';
import j2 from './j2.jpg';
import path from 'path';
import listReactFiles from 'list-react-files';
import DocumentPicker from 'react-native-document-picker';


const axios = require('axios');

let text = "change";

const styles = StyleSheet.create({
    container: {
        paddingTop: 50,
        alignItems: "center",
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    tinyLogo: {
        width: 50,
        height: 50,
    },
    logo: {
        width: 66,
        height: 58,
    },
    a1: {
        width: 150,
        height: 150,
    }
});


// Example posting a local image file (Node.js only):
//const fs = require('fs');
const fs = require('browserify-fs');
const deepai = require('deepai'); // OR include deepai.min.js as a script tag in your HTML

deepai.setApiKey('db75faa2-c245-49bb-81fd-8cc1a61517bf');


export default class API extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            text: "chansadasdasdge", ct: 0, truth: false,
            items: [],
            todos: [],
            foodName1: "apple",
            foodName2: "orange",
            fileResponse: ""
        };
        this.changeText = this.changeText.bind(this);
        this.fetchData = this.fetchData.bind(this);
        this.fetchToDo = this.fetchToDo.bind(this);
        this.clearData = this.clearData.bind(this);
        this.logRef = this.logRef.bind(this);
        this.picture1 = React.createRef(null);
        this.picture2 = React.createRef(null);
        this.imageCompareAPIwithURL = this.imageCompareAPIwithURL.bind(this);
        this.handleDocumentSelection = this.handleDocumentSelection.bind(this);

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

    async imageCompareAPIwithURL() {
        let url1 = `https://source.unsplash.com/300x300/?${this.state.foodName1}`;
        let url2 = `https://source.unsplash.com/300x300/?${this.state.foodName2}`;

        //'https://image-compare.hcti.io/api?image_url=https://hcti.io/v1/image/28c381f2-ca52-43de-a984-3b17597a1a7b&other_image_url=https://hcti.io/v1/image/28c381f2-ca52-43de-a984-3b17597a1a7b'
        fetch(`https://image-compare.hcti.io/api?image_url=${url1}&other_image_url=${url2}`)
            .then(res => res.json())
            .then(json => console.log(json));
    }


    async comparePhoto() {
        //let loc1 = this.picture1.current.props.source;
        //console.log(loc1);
        //console.log(this.picture1.current.props.source + "check check");
        let resp = await deepai.callStandardApi("image-similarity", {
            image1: fs.createReadStream("./src/j1.jpg"),//document.getElementById('pic1'),
            image2: fs.createReadStream("./src/j2.jpg")//document.getElementById('pic2'),
        });

        console.log(resp);

    }

    async test() {
        let res = await fetch("https://pokeapi.co/api/v2/pokemon/ditto");
        console.log(res);
    }

    async logRef() {
        console.log(path.dirname(__dirname));
        console.log(this.picture1.current);
        console.log(this.picture1.current.props.source);

        console.log(this.picture2.current);
        console.log(this.picture2.current.props.source);
        //console.log(this.picture1);
        //console.log(this.picture2);

    }

    async fakeAPI() {
        let res = await axios.get('http://localhost:3000/test');
        console.log(res);
        console.log(res.data);
    }

    async handleDocumentSelection() {
        try {
            console.log(DocumentPicker)
            const response = await DocumentPicker.pick({
                presentationStyle: 'fullScreen',
            });
            this.setState({
                ...this.state,
                fileResponse: response
            })
            //setFileResponse(response);
        } catch (err) {
            console.warn(err);
        }
    }


    render() {
        let url1 = `https://source.unsplash.com/300x300/?${this.state.foodName1}`;
        let url2 = `https://source.unsplash.com/300x300/?${this.state.foodName2}`;

        let sampleClick = "";
        if (this.state.truth) {
            sampleClick = <Text>it's loaded with information down below</Text>;
        }
        else {
            sampleClick = <Text>Not loaded with information</Text>;
        }
        return (
            <ScrollView >
                <SafeAreaProvider>
                    <View style={styles.container}>
                        <Image style={styles.a1} source={{ uri: url1 }} />
                        <Image style={styles.a1} source={{ uri: url2 }} />

                        <Image

                            nativeID="pic1"
                            style={styles.tinyLogo}
                            source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }}
                        />
                        <Image
                            ref={this.picture1}

                            className="poop"
                            nativeID="pic2"
                            id="pic2"
                            style={styles.tinyLogo}
                            source={require('./j1.jpg')}
                        />

                        <Text >Image v1</Text>

                        <Image
                            ref={this.picture2}
                            style={styles.tinyLogo}
                            source={require('./j2.jpg')}
                        />
                        <Text>Image v2</Text>
                        <Text>Receving APIs</Text>
                        <Text>Response: {this.state.text} {this.state.ct} {this.state.truth + ""}</Text>
                        
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
                        <Button title="imageCompareAPIwithURL works" onPress={this.imageCompareAPIwithURL} />
                        <Button title="photo API for local file" onPress={this.comparePhoto} />
                        <Button title="logRef" onPress={this.logRef} />
                        <Button title="Test local API" onPress={this.fakeAPI} />

                        <Button title="Select" onPress={this.handleDocumentSelection} />

                        

                    </View>




                </SafeAreaProvider>
            </ScrollView>


        )
    }
}