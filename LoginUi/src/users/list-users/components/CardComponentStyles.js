import {Dimensions, StyleSheet} from 'react-native';

const CardComponentStyles = StyleSheet.create({

    container: {
        height: Dimensions.get('screen').height * 0.2,
        width: Dimensions.get('screen').width * 0.9,
        flexDirection: "row",
        margin: 20
    },
    containerImage: {
        flex: 1
    },
    containerUserData: {
        flex: 1,
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center"
    }
});

export default CardComponentStyles;