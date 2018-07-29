import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    scrollView: {
        flex: 1
    },
    emptyPage: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    emptyDeckMessage: {
        textAlign: 'center',
        fontSize: 40,
        fontWeight: 'bold'
    },
    card: {
        height: 200,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: 'black'
    },
    title: {
        textAlign: 'center',
        fontSize: 25,
        fontWeight: 'bold'
    },
    desc: {
        textAlign: 'center',
        fontSize: 20
    }
});

export default styles;
