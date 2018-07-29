import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        marginTop: 50
    },
    input: {
        height: 40,
        margin: 20,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: 'black',
    },
    btn: {
        height: 40,
        backgroundColor: 'black',
        justifyContent: 'center',
        borderRadius: 5,
        marginTop: 40,
        marginLeft: 80,
        marginRight: 80,
    },
    btnTitle: {
        alignSelf: 'center',
        fontSize: 30,
        color: 'white',
    }
});
export default styles;
