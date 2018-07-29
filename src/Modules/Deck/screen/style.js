import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-around',
        marginBottom: 50,
        marginTop: 50
    },
    lable: {
        flex: 3,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        textAlign: 'center',
        fontSize: 50,
        fontWeight: 'bold',
        color: 'black',
        height: 50,
        marginTop: 10,
        marginBottom: 10
    },
    desc: {
        textAlign: 'center',
        height: 50,
        fontSize: 30,
        fontWeight: 'bold',
        color: 'gray',
        marginTop: 10,
        marginBottom: 10
    },
    touchable: {
       height: 40,
        marginTop: 10,
        marginBottom: 10,
        alignSelf: 'center'
    },
    btnContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: 'black',
        width: 200
    },
    btnTitle: {
        textAlign: 'center',
        fontSize: 30,
        alignSelf: 'center',
    }
});
export default styles;
