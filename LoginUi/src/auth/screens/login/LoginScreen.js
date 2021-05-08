import React, { useState } from 'react';
import { View, Text, StatusBar, Image, TextInput, TouchableHighlight, Alert, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import LoginStyles from './LoginStyles';
import Colors from '../../../shared/colors/Colors';
import ButtonStyles from '../../../shared/styles/ButtonStyles';
const LoginScreen = ({navigation}) => {
    const [name, setName] = useState("");
    const [job, setJob] = useState("");
    const sendUser = async ()=>{
        const response = await fetch('https://reqres.in/api/users', {
            method: 'POST',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              name: name,
              job: job
            })
          });
          const responseJson = await response.json();
          console.log(responseJson);
    }
    const getUser = async () => {
        const response = await fetch("https://reqres.in/api/users/2");
        const responseJson = await response.json()
        console.log(responseJson);
        navigation.navigate("ListUsers");
    }
    return <View style={LoginStyles.container}>
        <StatusBar backgroundColor={Colors.primary}></StatusBar>
        <LinearGradient colors={[Colors.primary, Colors.secondary]} style={LoginStyles.logoContainer}>
            <Image source={require('./img/account.png')} style={LoginStyles.logo}></Image>
            <Text style={LoginStyles.title}>Login</Text>
        </LinearGradient>
        <View style={LoginStyles.inputDataContainer}>
            <TextInput placeholder="name" style={LoginStyles.inputData} onChangeText={(text) => setName(text)}></TextInput>
            <TextInput placeholder="job"  style={LoginStyles.inputData} onChangeText={(text) => setJob(text)}></TextInput>
            <TouchableOpacity onPress={()=>getUser()}>
                <LinearGradient colors={[Colors.primary, Colors.secondary]} style={ButtonStyles.large}>
                    <Text style={LoginStyles.textButton}>Login</Text>
                </LinearGradient>
            </TouchableOpacity>
        </View>
    </View>
}
export default LoginScreen;
