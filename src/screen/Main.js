import React, { Component } from 'react';
import { Dimensions, Image, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import AppContext from '../helpers/AppContext';

const { width, height } = Dimensions.get('window');

export default class SignUp extends Component {
  componentDidMount() {}
  render() {
    return (
      <AppContext.Consumer>
        {({ login }) => {
          return (
            <SafeAreaView style={styles.container}>
              <View style={styles.viewContent}>
                <Image style={styles.avata} source={{ uri: login.avata }} />
                <Text style={styles.textTitle}>{login.name}</Text>
              </View>
            </SafeAreaView>
          );
        }}
      </AppContext.Consumer>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white'
  },
  viewContent: {
    backgroundColor: '#eee',
    padding: 20
  },
  textTitle: {
    fontSize: 14,
    fontWeight: '600',
    marginTop: 10
  },
  avata: {
    width: 30,
    height: 30,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: 'green'
  }
});
