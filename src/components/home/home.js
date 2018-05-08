import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import { Button } from '../button/button';

export class Home extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>{this.props.text}</Text>
        <Text>{this.props.data.ip}</Text>
        <Button text="Get Info" clickAction={this.props.getText} />
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
  title: {
    fontSize: 20,
    marginBottom: 10
  }
});
