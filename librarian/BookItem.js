import React, { Component } from 'react';
import {
  View,
  TouchableWithoutFeedback,
  Text,
  StyleSheet
} from 'react-native';

// Create a custom class BookItem which is a component
export default class BookItem extends Component {
  render() {
    const book = this.props.book;
    let description;
    let rating;

    /*
      Sometimes the description can be super long.
      This code will shorten the description to be 120 characters max
    */
    if (book.description !== undefined) {
      if (book.description.length >= 120) {
        // Cut the description to 120 chars if too long
        description = book.description.slice(0,120) + '...';
      } else {
        description = book.description;
      }
    }


    return (
      // If we click on a BookItem in our FlatList, bring up the BookScreen which
      // we named 'Book' in App.js and display the according book info
      <TouchableWithoutFeedback
        onPress={() => {
          this.props.navigation.navigate('Details', { book: book })
        }}
        background={'#666666'}
        underlayColor={'#666666'}
      >
        <View style={styles.listItem}>
          <View style={{flex: 1, flexDirection: 'row'}}>
            <Text style={styles.bookTitle}>{book.title}</Text>
            <View style={styles.ratingDot}>
              {(book.averageRating) ? (<Text style={styles.ratingText}>{book.averageRating}</Text>) : <Text style={styles.ratingText}>/</Text>}
            </View>
          </View>
            {(description) ? (<Text style={styles.bookDescription}>{description}</Text>) : null}
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = StyleSheet.create({
  listItem: {
    padding: 25,
    backgroundColor: '#EBEDEF',
    borderRadius: 10,
    margin: 10,
  },
  bookTitle: {
    flexBasis: '95%',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
    fontFamily: 'sans-serif-medium',
  },
  bookDescription: {
    fontSize: 16,
    fontFamily: 'sans-serif',
  },
  ratingText: {
    color: 'white',
    fontFamily: 'sans-serif-medium',
    textAlign: 'center',
    paddingTop: 3,
  },
  ratingDot: {
    flexBasis: '10%',
    width: 25,
    height: 25,
    borderRadius: 13,
    backgroundColor: '#2C3E50',
    right: 0,
  }
});
