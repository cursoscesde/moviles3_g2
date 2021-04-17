import React, { useState } from 'react';
import { View, Text, StatusBar, Image, TextInput, TouchableHighlight, Alert, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import LoginStyles from './LoginStyles';
import Colors from '../../../shared/colors/Colors';
import ButtonStyles from '../../../shared/styles/ButtonStyles';
const LoginScreen = () => {
    const [email, setEmail] = useState("");
    const validateEmail = ()=>{
        if(email === ""){
            Alert.alert("Debe llenar todos los campos");
        }
    }
    return <View style={LoginStyles.container}>
        <StatusBar backgroundColor={Colors.primary}></StatusBar>
        <LinearGradient colors={[Colors.primary, Colors.secondary]} style={LoginStyles.logoContainer}>
            <Image source={require('./img/account.png')} style={LoginStyles.logo}></Image>
            <Text style={LoginStyles.title}>Login</Text>
        </LinearGradient>
        <View style={LoginStyles.inputDataContainer}>
            <TextInput placeholder="Email" style={LoginStyles.inputData} onChangeText={(text) => setEmail(text)}></TextInput>
            <Text>{email}</Text> 
            <TextInput placeholder="Password" secureTextEntry={true} keyboardType="numeric" style={LoginStyles.inputData}></TextInput>
            <TouchableOpacity onPress={()=>validateEmail()}>
                <LinearGradient colors={[Colors.primary, Colors.secondary]} style={ButtonStyles.large}>
                    <Text style={LoginStyles.textButton}>Login</Text>
                </LinearGradient>
            </TouchableOpacity>
        </View>
    </View>
}
export default LoginScreen;
