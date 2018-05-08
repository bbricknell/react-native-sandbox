import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';

export class Button extends Component {
  render() {
    return(
      <TouchableOpacity style={styles.btn} onPress={this.props.clickAction}>
        <Text style={styles.text}>{this.props.text}</Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  btn: {
    minWidth: 100,
    minHeight: 50,
    marginVertical: 10,
    padding: 10,
    borderWidth: 2.5,
    borderRadius: 50,
    borderColor: '#5F9EA0'
  },
  text: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
    color: '#5F9EA0'
  }
});

Button.propTypes = {
  text: PropTypes.string.isRequired,
  clickAction: PropTypes.func.isRequired
};