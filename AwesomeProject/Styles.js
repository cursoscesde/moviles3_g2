import {StyleSheet, Dimensions} from 'react-native';

const Styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column"
    },
    section1: {
        flex: 1,
    },
    section2: {
        flex: 1,
        backgroundColor: "grey"
    },
    cardContainer1:{
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center"
    },
    card: {
        width: Dimensions.get('screen').width*0.4,
        height: 150,
        margin: 10,
    },
    cardTitle: {
        flex: 1,
        backgroundColor: "#009688",
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20
    },
    cardBody:{
        flex: 3,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        borderColor: "black",
        borderBottomWidth: 1,
        borderEndWidth: 1,
        borderLeftWidth: 1
    }
});

export default Styles;