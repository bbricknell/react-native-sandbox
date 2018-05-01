import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { AppRegistry, View } from 'react-native';
import Home from './src/containers/home-container';
import store from './src/store/store';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Home></Home>
      </Provider>
    );
  }
}

AppRegistry.registerComponent('reactNativeSandbox', () => App);
