import React from 'react';
import { View, Text, Image, Button, TouchableOpacity, Alert } from 'react-native';
import UserStyles from './UserStyles';
const UserScreen = ({ route, navigation }) => {
    const { id, first_name, last_name, avatar, email } = route.params.user;

    const editUser = async () => {
        try {
            const response = await fetch('https://reqres.in/api/users/2', {
                method: 'PUT',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name: "morpheus",
                    job: "zion resident"
                })
            });
            const jsonResponse = await response.json();
            console.log(jsonResponse)
        } catch (e) {
            Alert.alert("Hubo un error inesperado, vuelva a intentarlo más tarde");
        }
    }
    const deleteUser = async () => {
        try {
            const response = await fetch('https://reqres.in/api/users/2', {
                method: 'DELETE',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    id: id,
                })
            });
            const jsonResponse = await response.json();
            console.log(jsonResponse)
        } catch (e) {
            Alert.alert("Hubo un error inesperado, vuelva a intentarlo más tarde");
        }
    }
    return (
        <View style={UserStyles.container}>
            <View style={UserStyles.imageContainer}>
                <Image source={{ uri: avatar }} borderTopLeftRadius={5}
                    style={{ flex: 1, width: undefined, height: undefined }} />
            </View>
            <View style={UserStyles.userInfoContainer}>
                <Text>{id}</Text>
                <Text>{first_name}</Text>
                <Text>{last_name}</Text>
                <Text>{email}</Text>
                <View style={UserStyles.buttonsContainer}>
                    <TouchableOpacity style={UserStyles.buttoStyle} onPress={() => editUser()}>
                        <Text>Editar</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={UserStyles.buttoStyle} onPress={() => deleteUser()}>
                        <Text>Eliminar</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

export default UserScreen;