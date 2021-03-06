import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  ScrollView,
  Modal,
  TextInput
} from 'react-native';

/*
  Import our two custom components
*/
import NewCardModal from './NewCardModal';
import Card from './Card';

/*
  Default set of cards
*/
const DEFAULT_CARDS = [
  {
    term: "Fight",
    subject: "School Spirit",
    definition: "On"
  },
  {
    term: "UCLA",
    subject: "School Spirit",
    definition: "sucks"
  },
  {
    term: "YES...",
    subject: "Improv",
    definition: "AND..."
  }
];

class App extends Component {
  state = {
    cards: DEFAULT_CARDS,
    modalVisible: false
  }

  /*
    Toggles the new card modal
  */
  _toggleModal = () => {
    this.setState({
      modalVisible: !this.state.modalVisible
    });
  }

  /*
    Passed to the new card modal.
    Called when user decides to add new card.
    Creates card object and adds it to our state
  */
  _addCard = (_term, _definition, _subject) => {
    const cards = this.state.cards;

    cards.push({
      term: _term,
      definition: _definition,
      subject: _subject,
    });

    this.setState({
      cards: cards
    });

    this.setState({
      modalVisible: false
    });
  }

  render() {
    // Loop through the cards array in state and create Card component for each card
    const cards = this.state.cards.map((card, index) => {
      // Pass the appropriate data as a prop to the Card component
      return (
        <Card cardData={card} key={index} />
      )
    });

    return (
      <View style={styles.container}>
        <NewCardModal
          modalVisible={this.state.modalVisible}
          toggleModal={this._toggleModal}
          addCard={this._addCard}
        />

        <ScrollView>
          {cards}
        </ScrollView>

        <TouchableHighlight
          style={styles.addButton}
          onPress={this._toggleModal}
          underlayColor='#666666'
        >
          <Text style={styles.addButtonText}>Add Card</Text>

        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000'
  },
  addButton: {
    backgroundColor: '#666666',
    paddingTop: 20,
    paddingBottom: 20
  },
  addButtonText: {
    color: '#FFFFFF',
    textAlign: 'center',
    fontSize: 20
  }
});

export default App;
