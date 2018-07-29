import { StyleSheet, Dimensions } from 'react-native';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-around',
        width: SCREEN_WIDTH,
    },
    scrol: {
        flex: 1
    },
    counter: {
        fontSize: 20,
        textAlign: 'center',
        fontWeight: 'bold',
        paddingTop: 10
    },
    card: {
        width: '100%',
        flex: 2,
    },
    text: {
        alignSelf: 'center',
        fontSize: 50,
        fontWeight: 'bold',
        paddingTop: 40
    },
    answerBtn: {
        alignSelf: 'center',
        color: 'red',
        fontSize: 20
    },
    btnBorder: {
        height: 50,
        borderRadius: 5,
        marginTop: 10,
        marginBottom: 10,
        justifyContent: 'center',
        
    },
    btnLabel: {
        alignSelf: 'center',
        fontSize: 30,
        fontWeight: 'bold'
    },
    resultContainer: {
        justifyContent: 'space-around',
        alignItems: 'center',
        height: '100%'
    },
    result: {
        textAlign: 'center',
        fontSize: 30,
        fontWeight: 'bold',
    },
    resultBtn: {
        height: 40,
        width: 300,
        borderRadius: 5,
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: 'black',
        marginTop: 10,
        marginBottom: 10
    }
});
export default styles;
