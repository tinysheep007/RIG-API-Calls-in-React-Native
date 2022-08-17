import React, { useEffect, useState } from 'react';
import { render } from 'react-dom';
import { StyleSheet, Text, View, Button } from 'react-native';
import { Input } from 'react-native-elements';
import { ActivityIndicator, ScrollView, TextInput } from 'react-native';
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
        width: 120,
        height: 120,
        margin: "auto"
    },
    logo: {
        width: 66,
        height: 58,
    },
    a1: {
        width: 150,
        height: 150,
        border: "3px solid red",
        margin: "3px"
    },
    imginfo: {
        border: "2px solid black",
        marginBottom: "5px",
        marginTop: "2px",
        padding: "5px"
    },
    otherinfo: {
        border: "2px solid black",
        padding: "5px"
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
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
            fileResponse: "",
            img1Width: "",
            img1Height: "",
            img1Type: "",
            img2Width: "",
            img2Heightl: "",
            img2Type: "",
            percent_diff: "",
            pixel_diff: "",
            rendered: false,
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
        this.changeInputFood1 = this.changeInputFood1.bind(this);
        this.changeInputFood2 = this.changeInputFood2.bind(this);

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
            .then(json => {
                console.log(json)
                this.setState({
                    img1Width: json.image.width,
                    img1Height: json.image.height,
                    img1Type: json.image.type,
                    img2Width: json.other_image.width,
                    img2Height: json.other_image.height,
                    img2Type: json.other_image.type,
                    percent_diff: json.percent_difference,
                    pixel_diff: json.pixel_difference,
                    rendered: true
                })
            });
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

    changeInputFood1(e) {
        this.setState({foodName1: e.target.value});
    }

    changeInputFood2(e) {
        this.setState({foodName2: e.target.value});
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
                        <Text style={{ fontSize: "55px", fontWeight: "bold" }}>Receving APIs</Text>
                        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                            <View>
                                <Text style={{ margin: "auto", fontSize: "30px", fontFamily: "new roman" }}>{this.state.foodName1}</Text>
                                <Image style={styles.a1} source={{ uri: url1 }} />
                            </View>

                            <View>
                                <Text style={{ margin: "auto", fontSize: "30px", fontFamily: "new roman" }}>{this.state.foodName2}</Text>
                                <Image style={styles.a1} source={{ uri: url2 }} />
                            </View>

                        </View>

                        {/* <Image

                            nativeID="pic1"
                            style={styles.tinyLogo}
                            source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }}
                        /> */}

                        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                            <View>
                                <Image
                                    ref={this.picture1}

                                    className="poop"
                                    nativeID="pic2"
                                    id="pic2"
                                    style={styles.tinyLogo}
                                    source={require('./j1.jpg')}
                                />
                                <Text style={{ margin: "auto" }} >IMG v1</Text>
                                <TextInput
                                    style={styles.input}
                                    onChange={this.changeInputFood1}
                                    value={this.state.foodName1}
                                />
                            </View>

                            <View>
                                <Image
                                    ref={this.picture2}
                                    style={styles.tinyLogo}
                                    source={require('./j2.jpg')}
                                />
                                <Text style={{ margin: "auto" }}>IMG v2</Text>
                                <TextInput
                                    style={styles.input}
                                    onChange={this.changeInputFood2}
                                    value={this.state.foodName2}
                                />
                            </View>
                        </View>

                        <View style={{ margin: "10px", boxShadow: "10px 5px 5px #611506" }}>
                            <Button color="#c91c1c" title="clear" onPress={this.clearData} />
                        </View>

                        <View>
                            <Button color="#c9421c" title="Get Names" onPress={this.fetchData} />
                        </View>


                        {sampleClick}

                        {this.state.items.map((i, index) => {
                            return <Text key={index}>{index}, {i.name}</Text>
                        })}

                        <View style={{ margin: "5px", boxShadow: "10px 5px 5px #614706", borderRadius: "30%", marginBottom: "10px" }}>
                            <Button color="#c9871c" title='fetch ToDO' onPress={this.fetchToDo} />
                        </View>


                        {this.state.todos.map((i, index) => {
                            return <Text key={index}>{index}.{i.title}</Text>
                        })}

                        <View style={{ borderRadius: "30%", marginBottom: "10px" }}>
                            <Button color="#c9b21c" title="Image Compare API with URL / Check Results in console" onPress={this.imageCompareAPIwithURL} />
                        </View>

                        {this.state.rendered ? (<View>
                            <View className="img1info" style={styles.imginfo}>
                                <Text>
                                    information of image 1
                                </Text>
                                <Text>
                                    Width: {this.state.img1Width}
                                </Text>
                                <Text>
                                    Height: {this.state.img1Height}
                                </Text>
                                <Text>
                                    Type: {this.state.img1Type}
                                </Text>
                            </View>

                            <View className="img2info" style={styles.imginfo}>
                                <Text>information of image 2</Text>
                                <Text>
                                    Width: {this.state.img2Width}
                                </Text>
                                <Text>
                                    Height: {this.state.img2Height}
                                </Text>
                                <Text>
                                    Type: {this.state.img2Type}
                                </Text>
                            </View>

                            <View className="otherinfo" style={styles.otherinfo}>
                                <Text>
                                    Percent Difference: {this.state.percent_diff}
                                </Text>

                                <Text>
                                    Pixel Difference: {this.state.pixel_diff}
                                </Text>
                            </View>
                        </View>)
                            : (<View style={styles.imginfo}><Text>No Data</Text></View>)
                        }

                        <View style={{ margin: "8px", boxShadow: "10px 5px 5px #eb7734", borderRadius: "30%" }}>
                            <Button color="red" title="Doesn't Work: DeepAI API for comparing local file" onPress={this.comparePhoto} />
                        </View>


                        <View>
                            <Button color="blue" title="logRef" onPress={this.logRef} />
                        </View>

                        <View style={{ margin: "8px", borderRadius: "30%", boxShadow: "10px 5px 5px #3474eb", }}>
                            <Button title="Test local API" onPress={this.fakeAPI} />
                        </View>

                        <View>
                            <Button color="orange" title="Check Status of Document Select" onPress={this.handleDocumentSelection} />
                        </View>


                        {/* <Button title="get gay" onPress={this.getGay}/> */}

                    </View>




                </SafeAreaProvider>
            </ScrollView>


        )
    }
}