import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import styles from './styles';
import { getTime } from '../utils/helper';
import { addNewDeck } from '../action';
import { saveNewDeck } from '../api';

class NewDeck extends Component {
    state = {
        deckTitle: ''
    }

    submit = () => {
        const key = getTime();
        const newdeck = {
            title: this.state.deckTitle,
            question: []
        };
        this.props.addNewDeck(key, newdeck);
        this.setState({ deckTitle: '' });
        saveNewDeck(newdeck, key)
        .then(() => this.backtoHome());
    }
    backtoHome = () => {
        this.props.navigation.navigate('list');
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={{ flex: 1 }} />
                <Text style={styles.text}>What is the title of your new deck?</Text>
                <TextInput 
                style={styles.input} 
                placeholder='Deck Title'
                value={this.state.deckTitle}
                onChangeText={(deckTitle) => this.setState({ deckTitle })}
                />
                <TouchableOpacity 
                style={styles.button} 
                onPress={this.submit}
                >
                  <Text style={styles.btnTitle}>Submit</Text>
                </TouchableOpacity>

            </View>
        );
    }
}

export default connect(null, { addNewDeck })(NewDeck);
