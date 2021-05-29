
import React from 'react';
import { View, Text, Image } from 'react-native';
import CardComponentStyles from './CardComponentStyles';
const CardComponent = (props) => {
  const { data } = props;
  return <View style={CardComponentStyles.container}>
    <View style={CardComponentStyles.containerImage}>
      <Image source={{ uri: data.avatar }} borderTopLeftRadius={5}
        style={{ flex: 1, width: undefined, height: undefined }} />
    </View>
    <View style={CardComponentStyles.containerUserData}>
      <Text>{data.id}</Text>
      <Text>{data.first_name}</Text>
      <Text>{data.last_name}</Text>
      <Text>{data.email}</Text>
    </View>
  </View>
}

export default CardComponent;
