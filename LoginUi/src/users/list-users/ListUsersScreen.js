
import React, {useState, useEffect} from 'react';
import { Alert, FlatList, TouchableOpacity, View} from 'react-native';
import CardComponent from './components/CardComponent';
const ListUsersScreen = ({route,navigation}) => {
    console.log(route.params);
    const [users, setUsers] = useState();
    const getUsers = async () =>{
        const response = await fetch("https://reqres.in/api/users?page=2");
        const responseJson = await response.json();
        setUsers(responseJson.data);
    }
    const userInfo = (user)=>{
        navigation.navigate("User", {
            user: user
        });
    }
    useEffect(()=>{
        getUsers();
    }, []);
    return <View>
        <FlatList 
        data={users}
        renderItem={({item})=><TouchableOpacity onPress={()=>userInfo(item)}>
            <CardComponent data={item} name="hola"></CardComponent>
        </TouchableOpacity>}></FlatList>
    </View>
}

export default ListUsersScreen;
