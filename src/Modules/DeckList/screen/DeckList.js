import React, { Component } from 'react';
import { View, ScrollView, Text, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { fetchDecks } from '../utils/api';
import { setLoadedDecks, setSelctedDeckKey } from '../action';
import styles from './styles';
 
class DeckList extends Component {
    state = {
        deckList: null,
    }
    
    componentDidMount() {
        fetchDecks()
        .then((objects) => 
         this.props.setLoadedDecks(objects));
    }
    componentWillReceiveProps = (props) => {
        if (props.decks) {
            this.setState({ deckList: props.decks });
        }    
    }
    navigateToSelectedDeck = (key) => {
        this.props.setSelctedDeckKey(key, () => this.props.navigation.navigate('selectedDeck'));
    }
    render() {
        const { deckList } = this.state;
        if (!deckList) { return (
                        <View style={styles.emptyPage}>
                            <Text style={styles.emptyDeckMessage}>Please Add New Deck</Text>
                        </View>
                );
        }
        return (
            <ScrollView style={styles.scrollView}>
                {Object.keys(deckList).map((key) => {
                    return (
                        <TouchableOpacity 
                        style={styles.card} key={key}
                        onPress={() => this.navigateToSelectedDeck(key)}
                        >
                            <Text style={styles.title}>{deckList[key].title}</Text>
                            <Text style={styles.title}>
                            {`Number Of Car: ${deckList[key].question.length}`}</Text>
                        </TouchableOpacity>
                    );
                })}
            </ScrollView>
            
        );
    }
}

const mapStateToProps = ({ dec }) => {
    const { decks } = dec;
    return { decks };
};
export default connect(mapStateToProps, { setLoadedDecks, setSelctedDeckKey })(DeckList);
