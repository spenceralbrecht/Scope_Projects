import React from 'react';
import {
  StyleSheet,
  Button,
  Text,
  View,
  TouchableWithoutFeedback
} from 'react-native';

export default class Card extends React.Component {
  state = {
    showTerm: true,
    starred: false
  }

  /*
    Flips the showTerm flag in our state
  */
  flipCard = () => {
    this.setState({
      showTerm: !this.state.showTerm
    });
  }

  toggleStar = () => {
    this.setState({
      starred: !this.state.starred
    });
  }

  render() {
    // Conditional statement that changes the style of the text based on whether or not we're seeing the term or definition
    const textStyle = (this.state.showTerm) ? (styles.termText) : (styles.definitionText);
    const circleStyle = (this.state.starred) ? (styles.priority_circle) : (styles.circle);
    return (
      <TouchableWithoutFeedback onPress={this.flipCard}>
        <View style={[styles.container]}>
          <Text style={styles.cardSubject}>{this.props.cardData.subject}</Text>
          <Text style={styles.cardTitle}>{(this.state.showTerm) ? ("Term") : ("Definition")}</Text>
          <Text style={textStyle}>{(this.state.showTerm) ? (this.props.cardData.term) : (this.props.cardData.definition)}</Text>
          <TouchableWithoutFeedback onPress={this.toggleStar}>
             <View style={circleStyle} />
          </TouchableWithoutFeedback>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexBasis: '50%',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    padding: 20,
    height: 300,
    borderRadius: 10,
  },
  cardTitle: {
    color: '#7f8c8d',
    fontSize: 18,
    //fontFamily: 'Georgia',
    position: 'absolute',
    left: 20,
    top: 20
  },
  cardSubject: {
    color: '#000000',
    fontSize: 18,
    position: 'absolute',
    paddingLeft: 220,
    textAlign: 'right',
    top: 20
  },
  termText: {
    fontSize: 50,
    //fontFamily: 'Georgia-Bold'
  },
  definitionText: {
    fontSize: 30,
    //fontFamily: 'Georgia'
  },
  circle: {
      width: 25,
      height: 25,
      position: 'absolute',
      borderRadius: 25/2,
      left: 10,
      bottom: 10,
      borderWidth: 1,
      borderColor: '#666666',
  },
  priority_circle: {
      width: 25,
      height: 25,
      position: 'absolute',
      borderRadius: 25/2,
      left: 10,
      bottom: 10,
      backgroundColor: '#ff8000',
  },
});
