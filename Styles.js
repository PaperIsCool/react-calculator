import { StyleSheet } from 'react-native';
import Colors from './Colors'

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: Colors.back,
        alignContent: "center",
        alignItems: "center"
    },

    input: {
        borderColor: "black",
        backgroundColor: Colors.input,
        borderRadius: 20,
        height: "15%",
        margin: 20,
        width: "95%",
        borderWidth: 1,
        padding: 20,
        fontSize: 30,
        color: 'white'
    },

    button: {
        backgroundColor: Colors.num,
        alignItems: 'center',
        borderWidth: 1,
        borderColor: "black",
        justifyContent: "center",
        borderRadius: 50,
        margin: 5,
        padding: 35
      },

    buttonText: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
    },

    buttons: {
        flex: 1,
        flexDirection: "row",
    },

    buttonSide: {
        backgroundColor: Colors.side,
        alignItems: 'center',
        borderWidth: 1,
        borderColor: "black",
        justifyContent: "center",
        borderRadius: 50,
        margin: 5,
        padding: 35
    },

    buttonAC: {
        backgroundColor: Colors.top,
        alignItems: 'center',
        borderWidth: 1,
        borderColor: "black",
        justifyContent: "center",
        borderRadius: 50,
        margin: 5,
        padding: 35,
    },

    buttonACText: {
        color: 'black',
        fontSize: 20,
        fontWeight: 'bold',
    },

    buttonTop: {
        backgroundColor: Colors.side,
        alignItems: 'center',
        borderWidth: 1,
        borderColor: "black",
        borderRadius: 50,
        margin: 5,
        padding: 35
    },


  });

export default styles