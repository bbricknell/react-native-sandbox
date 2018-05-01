import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class Home extends Component {
  componentDidMount() {
    this.props.getTest();
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>{this.props.test}</Text>
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
  },
  text: {
    color: '#333333'
  }
});
