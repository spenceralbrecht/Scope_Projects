import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  Text,
  Image
} from 'react-native';

export default class BookScreen extends Component {
  /*
    Set the StackNavigator options so our screen's title says Book
  */
  static navigationOptions = {
    title: 'More Info',
  };

  _onError = () => { this.setState({ failed: true }); }

  render() {
    /*
      Grab the data that may have been passed to this screen through the navigator
    */
    const { params } = this.props.navigation.state;

    // if (this.state.failed) {
    //
    // }

    return (
      <View style={styles.container}>
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          <Text style={styles.title}>{params.book.title}</Text>
          <Text style={styles.description}>Page Count: {params.book.pageCount}</Text>
          {this.props.image && <Image
            style={styles.thumbnail}
            resizeMode='contain'
            source={{uri: params.book.imageLinks.thumbnail}}
            onError={this._onError}
          />}
          {/*
          <Image
            style={styles.thumbnail}
            resizeMode='contain'
            source={{uri: params.book.imageLinks.thumbnail}}
            onError={this._onError}
          />*/}

          <Text style={styles.description}>{params.book.description}</Text>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 24
  },
  scrollContainer: {
    alignItems: 'center'
  },
  title: {
    fontSize: 30,
    textAlign: 'center',
    fontWeight: '700',
    marginTop: 20,
    fontFamily: 'sans-serif',
  },
  thumbnail: {
    width: 200,
    height: 200,
    flex: 1,
    marginTop: 20,
    marginBottom: 20
  },
  description: {
    fontSize: 15,
    lineHeight: 20,
    padding: 15,
    fontFamily: 'sans-serif-light',
  }
});
