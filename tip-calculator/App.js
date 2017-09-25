import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  Keyboard
} from 'react-native';

export default class App extends React.Component {
  state = {
    billAmount: 0,
    tip: 0,
    totalValue: 0
  }
  textChange = (value) => {
    // value is a string so we convert value to a float (number with decimals)
    value = parseFloat(value || 0).toFixed(2);

    // Store this new value in our application's state
    this.setState({
      billAmount: value
    });
  }
  calculateTip = (proportion) => {
    const billAmount = this.state.billAmount;
    const tip = (proportion * billAmount).toFixed(2);
    const total = (parseFloat(billAmount) + parseFloat(tip)).toFixed(2)
    // Now that we've calculated the tip and total value, we store it in our
    // app state
    this.setState({
      tip: tip,
      totalValue: total,
    })

    // Used to hide the phone keyboard
    Keyboard.dismiss();
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Tip Calculator</Text>

        <TextInput
          autoFocus={true}
          keyboardType='numeric'
          onChangeText={this.textChange}
          placeholder='Bill Amount'
          style={styles.billInput}
        />
        <View style={styles.tipButtonContainer}>
          <Button
            title="1%"
            color="#FF0000"
            onPress={() => {
              this.calculateTip(0.01);
            }}
          />

          <Button
            title="5%"
            color="#FFC300"
            onPress={() => {
              this.calculateTip(0.05);
            }}
          />

          <Button
            title="10%"
            color="#58D68D"
            onPress={() => {
              this.calculateTip(0.1);
            }}
          />

          <Button
            title="15%"
            onPress={() => {
              this.calculateTip(0.15);
            }}
          />
        </View>
        <Text style={styles.tipLabel}>Tip: {this.state.tip}</Text>
        <Text style={styles.totalLabel}>Total: {this.state.totalValue}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 60
  },
  title: {
    fontSize: 40,
    fontWeight: '700',
    textAlign: 'center',
    marginBottom: 20
  },
  billInput: {
    width: '80%',
    height: 80,
    fontSize: 28,
    borderColor: '#ccc',
    borderTopWidth: 1,
    borderBottomWidth: 1
  },
  tipButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
    paddingTop: 10,
    paddingBottom: 10,
    borderColor: '#ccc',
    borderBottomWidth: 1
  },
  tipLabel: {
    fontSize: 28,
    marginTop: 20
  },
  totalLabel: {
    fontSize: 28,
    fontWeight: '700',
    marginTop: 20
  }
});
