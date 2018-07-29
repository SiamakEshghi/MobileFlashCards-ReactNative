import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { NavigationActions } from 'react-navigation';
import { saveNewCardInDataBase } from '../utils/api';
import { saveNewcard } from '../action';
import styles from './style';

class NewCard extends Component {
    state = { 
        question: '',
        answer: ''
    }
    submit = () => {
        const { question, answer } = this.state;
        const { selectedKey } = this.props;
        this.props.saveNewcard({ question, answer }, selectedKey);
        saveNewCardInDataBase({ question, answer }, selectedKey)
        .then(() => this.props.navigation.dispatch(NavigationActions.back()));
    }
    render() {
        return (
            <View style={styles.container}>
                <TextInput 
                style={styles.input}
                placeholder='Question ?'
                value={this.state.question}
                onChangeText={(question) => this.setState({ question })}
                />
                <TextInput 
                style={styles.input}
                placeholder='Answer ?'
                value={this.state.answer}
                onChangeText={(answer) => this.setState({ answer })}
                />
                <TouchableOpacity 
                style={styles.btn} 
                onPress={this.submit}
                >
                  <Text style={styles.btnTitle}>Submit</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const mapStateToProps = ({ dec }) => {
    const { selectedKey } = dec;
    return { selectedKey };
};
export default connect(mapStateToProps, { saveNewcard })(NewCard);
