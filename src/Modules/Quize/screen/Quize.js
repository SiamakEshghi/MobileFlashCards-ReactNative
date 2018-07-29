import React, { Component } from 'react';
import { View, Text, ScrollView, TouchableOpacity, Dimensions, Animated } from 'react-native';
import { connect } from 'react-redux';
import { NavigationActions } from 'react-navigation';
import styles from './style';
import { clearLocalNotification, setLocalNotification } from '../../../Public/helper';

const SCREEN_WIDTH = Dimensions.get('window').width;

class Quize extends Component {
    state = {
        showAnswer: false,
        currentX: 0,
        isFinish: false,
        correctAnswers: 0,
        incorrectAnswer: 0,
        animatedValue: new Animated.Value(0),
        value: 0
    }

    componentDidMount = () => {
        this.state.animatedValue.addListener(({ value }) => {
            this.setState({ value });
        });
    }
    correctChoosed = () => {
        this.setState({ correctAnswers: this.state.correctAnswers + 1 });
        this.nextQuestion();
    }

    incorrectChoosed = () => {
        this.setState({ incorrectAnswer: this.state.incorrectAnswer + 1 });
        this.nextQuestion();
    }

    nextQuestion = () => {
        const { currentX } = this.state;
        const total = this.props.question.length;

        if (currentX < ((total - 1) * SCREEN_WIDTH)) {
            this.setState({ 
                currentX: this.state.currentX + SCREEN_WIDTH,
                value: 0,
                showAnswer: false
            }, () => {
                Animated.spring(this.state.animatedValue, {
                    toValue: 0, 
                    friction: 8,
                    tension: 10
                }).start();
                this.refs.scroll.scrollTo({ x: this.state.currentX, y: 0, animated: true });
            }); 
        } else {
            this.setState({ isFinish: true });
        }
    }
    flipCard = () => {
        const { animatedValue, value } = this.state;
        console.log(`AnimatedValiue: ${JSON.stringify(animatedValue)}`);
        
        if (value >= 90) {
            Animated.spring(animatedValue, {
                toValue: 0, 
                friction: 8,
                tension: 10
            }).start();
        } else {
            Animated.spring(animatedValue, {
                toValue: 180,
                friction: 8,
                tension: 10
            }).start();
        }
        this.setState({ showAnswer: !this.state.showAnswer });
    }
    
    backToDeck = () => {
        this.props.navigation.dispatch(NavigationActions.back());
    }
    restartQuize = () => {
        this.setState({ 
            showAnswer: false,
            currentX: 0,
            isFinish: false,
            correctAnswers: 0,
            incorrectAnswer: 0,
            value: 0
        }, () => {
            Animated.spring(this.state.animatedValue, {
                toValue: 0, 
                friction: 8,
                tension: 10
            }).start();
            this.refs.scroll.scrollTo({ x: this.state.currentX, y: 0, animated: true });
        }); 
        clearLocalNotification()
        .then(setLocalNotification);
    }
    renderQuestions = (item, index) => {
        const { showAnswer } = this.state;
        const total = this.props.question.length;
        
      
        return (
            <View style={styles.container} key={index}>
                <Text style={styles.counter}>{`${index + 1} / ${total}`}</Text>
                {this.renderCards(item)}
                <TouchableOpacity 
                onPress={() => this.flipCard()}
                >
                    <Text style={styles.answerBtn}>{ showAnswer ? 'Question' : 'Answer' }</Text>
                </TouchableOpacity>
                <View style={{ margin: 50 }}>
                    <TouchableOpacity 
                    style={[styles.btnBorder, { backgroundColor: 'green' }]}
                    onPress={() => this.correctChoosed()}
                    >
                    <Text style={styles.btnLabel}>CORRECT</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                    style={[styles.btnBorder, { backgroundColor: 'red' }]}
                    onPress={() => this.incorrectChoosed()}
                    >
                    <Text style={styles.btnLabel}>INCORRECT</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
    renderCards = (item) => {
        const { showAnswer, animatedValue } = this.state;
        const frontInterpolate = animatedValue.interpolate({
            inputRange: [0, 180],
            outputRange: ['0deg', '180deg'],
          });
        const backInterpolate = animatedValue.interpolate({
            inputRange: [0, 180],
            outputRange: ['180deg', '360deg']
          });
        const frontAnimatedStyle = {
            transform: [
                { rotateY: frontInterpolate }
            ]
        };
        const backAnimatedStyle = {
            transform: [
                { rotateY: backInterpolate }
            ]
        };
        return (
            <View style={styles.card}>
                { !showAnswer ?
                    <Animated.View style={frontAnimatedStyle}>
                        <Text style={styles.text}>{ item.question }</Text>
                    </Animated.View>
                    :
                    <Animated.View style={backAnimatedStyle}>
                        <Text style={styles.text}>{ item.answer }</Text>
                    </Animated.View>
                }
            </View>
        );
    }
    renderResultPage = () => {
        const { correctAnswers } = this.state;
        const total = this.props.question.length;
        return ( 
            <View style={styles.resultContainer}>
                <Text style={styles.result}>{`${(correctAnswers / total) * 100}% Correct` }</Text>
                <View>
                    <TouchableOpacity
                    style={styles.resultBtn}
                    onPress={this.backToDeck}
                    >
                    <Text style={styles.btnLabel}>BACK TO DECK</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                    style={styles.resultBtn}
                    onPress={this.restartQuize}
                    >
                    <Text style={styles.btnLabel}>RESTART QUIZE</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
    render() {
        const { question } = this.props;
        const { isFinish } = this.state;

        if (!question) return <View />;
        if (isFinish) return <View>{this.renderResultPage()}</View>; 
        return (
            <ScrollView 
                ref="scroll"
                horizontal
                style={styles.scrol}
                pagingEnabled
                 scrollEnabled={false}
            >
                {question.map((q, i) => this.renderQuestions(q, i))}
            </ScrollView>
        );
    }
}

const mapStateToProps = ({ dec }) => {
    const { selectedKey, decks } = dec;
    const selectedDeck = decks[selectedKey];
    const { question } = selectedDeck;
    return { question };
};

export default connect(mapStateToProps)(Quize);
