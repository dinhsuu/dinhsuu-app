import React, { Component } from 'react';
import { Text, View, SafeAreaView, StyleSheet, ActivityIndicator } from 'react-native';

export default class Loadding extends Component {
  componentDidMount() {
  }

  render() {
    return (
      <SafeAreaView style={styels.container}>
        <Text style={{ marginBottom: 10 }}> Loadding... </Text>
        <ActivityIndicator size={'large'} />
      </SafeAreaView>
    );
  }
}

const styels = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
