import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import styles from './style';

class Deck extends Component {
   
    navigateToNewCard = () => {
        this.props.navigation.navigate('newCard');
    }
    navigateToQuize= () => {
        this.props.navigation.navigate('quize');
    }
    render() {
        const { selectedDeck } = this.props;
        if (!selectedDeck) return <View />;
        return (
            <View style={styles.container}>
                <View style={styles.lable}>
                    <Text style={styles.title}>{selectedDeck.title}</Text>
                    <Text style={styles.desc}>{ `${selectedDeck.question.length} Cards`}</Text>
                </View>
                <View style={{ flex: 1 }}>
                    <TouchableOpacity 
                    style={styles.touchable}
                    onPress={this.navigateToNewCard}
                    >
                    <View style={styles.btnContainer}>
                        <Text style={styles.btnTitle}>ADD CARD</Text>
                    </View>
                    </TouchableOpacity>
                    <TouchableOpacity 
                    style={styles.touchable}
                    onPress={this.navigateToQuize}
                    >
                    <View style={[styles.btnContainer, { backgroundColor: 'black' }]}>
                      <Text style={[styles.btnTitle, { color: 'white' }]}>START QUIZE</Text>
                    </View>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const mapStateToProps = ({ dec }) => {
    const { selectedKey, decks } = dec;
    const selectedDeck = decks[selectedKey];
    return { selectedDeck };
};

export default connect(mapStateToProps)(Deck);
