import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({ 
    container: {
        flex: 1,
        justifyContent: 'space-around',
        margin: 20
    },
    text: {
        flex: 3,
        fontSize: 50,
        color: 'black', 
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 10,
        marginTop: 10
    },
    input: {
        flex: 1,
        borderRadius: 20,
        borderWidth: 1,
        borderColor: 'black',
        fontSize: 24
    },
    button: {
        flex: 1,
        backgroundColor: 'black',
        justifyContent: 'center',
        borderRadius: 20,
        marginTop: 10,
        marginBottom: 10,
        marginLeft: 40,
        marginRight: 40,
        
    },
    btnTitle: {
        alignSelf: 'center',
        fontSize: 30,
        color: 'white',
    }
});
export default styles;
