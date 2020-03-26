import React, { Component } from 'react';
import {
  Text,
  View,
  SafeAreaView,
  StyleSheet,
  ActivityIndicator,
  TextInput,
  Dimensions,
  TouchableOpacity
} from 'react-native';

const { width, height } = Dimensions.get('window');

export default class SignUp extends Component {
  state = {
    currentUser: null
  };

  componentDidMount() {
  }
  render() {
    const { currentUser } = this.state;
    return (
      <SafeAreaView style={styles.container}>
        <Text>hihihi</Text>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
