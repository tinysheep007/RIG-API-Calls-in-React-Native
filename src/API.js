import React, { useEffect, useState } from 'react';
import { render } from 'react-dom';
import { StyleSheet, Text, View, Button } from 'react-native';
import { Input } from 'react-native-elements';
import { ActivityIndicator, ScrollView } from 'react-native';
import { Image } from 'react-native-elements';
import { SafeAreaProvider } from 'react-native-safe-area-context';

let text = "change";




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

    clearData(){
        this.setState({todos:[],items:[]})
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
                        <Text>Receving APIs</Text>
                        <Text>Response: {this.state.text} {this.state.ct} {this.state.truth + ""}</Text>
                        <Button title="CLick to get API" onPress={this.changeText} />
                        <Button title="clear" onPress={this.clearData} />
                        <Button title="Get Names" onPress={this.fetchData} />
                        {sampleClick}
                        {this.state.items.map((i, index) => {
                            return <Text key={index}>{index}, {i.name}</Text>
                        })}
                        <Button title='fetch ToDO' onPress={this.fetchToDo} />
                        {this.state.todos.map((i, index) => {
                            return <Text key={index}>{index}.{i.title}</Text>
                        })}

                    </View>
                </SafeAreaProvider>
            </ScrollView>


        )
    }
}