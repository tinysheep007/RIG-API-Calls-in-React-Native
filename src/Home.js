import React from "react";
import { StyleSheet, Text, View, Button } from 'react-native';

export default function Home({ navigation }) {
    return (
        <View style={styles.container}>
            <Text>
                This is the home Page
            </Text>
            <Button title="Go Test API" onPress={()=>navigation.navigate('API')}/>
            <Button title="Go convert photo into base64" onPress={()=>navigation.navigate("Base64Convert")}/>
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
  });
  