/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  TextInput,
  View
} from 'react-native';
import MapView from 'react-native-maps';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class App extends Component<{}> {

  state = {
    searchLocation: '',
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.searchBar}>
          <TextInput
                  style={{height: 60, borderColor: 'gray', borderWidth: 1}}
                  onChangeText={
                    (text) => {
                      this.setState({searchLocation: text});
                    }
                  }
                  value={this.state.searchLocation}
          />
        </View>

        <MapView
            style={styles.map}
            region={{
              latitude: 34.022530,
              longitude: -118.286000,
              latitudeDelta: 0.0173,
              longitudeDelta: 0.0050,
            }}
            showsUserLocation={true}
            followsUserLocation={true}
            showsMyLocationButton={true}
            zoomEnabled={true}
            rotateEnabled={true}
            minZoomLevel={15.5}
            loadingEnabled={true}
            showsScale={true}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  map: {
    top: 60,
    bottom: 0,
    right: 0,
    left: 0,
    position: 'absolute',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  searchBar: {
    width: '100%',
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#2C3E50'
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
