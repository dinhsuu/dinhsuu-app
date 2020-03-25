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
import firebase from 'react-native-firebase';
import DropDownAlert from '../components/DropDownAlert';

const { width, height } = Dimensions.get('window');

export default class SignUp extends Component {
  state = {
    email: '',
    password: '',
    erroMessage: null
  };

  onChangeTextEmail = email => {
    this.setState({
      email
    });
  };

  onChangeTexPass = password => {
    this.setState({
      password
    });
  };

  handleSingUp = () => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(this.state.email, this.state.password)
      // .then(() => this.props.navigation.navigate('Main'))
      .catch(error => this.setState({ errorMessage: error.message }));
      DropDownAlert.success('thong bao', 'dang nhap thanh cong')
  };

  handleSingIn = () => {
    this.props.navigation.navigate('Login');
  };

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.textReghister}> Register </Text>
        <TextInput
          placeholder="Email"
          autoCapitalize="none"
          style={styles.textInput}
          onChangeText={this.onChangeTextEmail}
          value={this.state.email}
        />
        <TextInput
          placeholder="PassWord"
          autoCapitalize="none"
          secureTextEntry={true}
          style={styles.textInput}
          onChangeText={this.onChangeTexPass}
          value={this.state.password}
        />
        <TouchableOpacity onPress={this.handleSingUp} style={styles.btnSingup}>
          <Text style={styles.textButton}>Register</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this.handleSingIn} style={styles.btnLogin}>
          <Text style={styles.textButtonLogin}>Login</Text>
        </TouchableOpacity>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  textReghister: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 40
  },
  textInput: {
    width: width / 1.5,
    height: 40,
    marginTop: 20,
    borderWidth: 1,
    borderColor: 'green',
    paddingHorizontal: 15
  },
  btnSingup: {
    paddingHorizontal: 20,
    paddingVertical: 5,
    marginTop: 25,
    borderWidth: 1,
    borderColor: 'green',
    paddingHorizontal: 25
  },
  textButton: {
    color: '#000',
    fontWeight: '600',
    fontSize: 16
  },
  textButtonLogin: {
    color: 'red',
    marginTop: 15
  }
});
