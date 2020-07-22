import React, { Component } from 'react';
import { Text, View, SafeAreaView, TextInput, Dimensions, StyleSheet, TouchableOpacity, Image } from 'react-native';

const { width, height } = Dimensions.get('window');
import firebase from 'react-native-firebase';
import DropAlert from '../components/DropDownAlert';
import * as Facebook from '../helpers/Facebook';
import AppProvider from '../helpers/AppProvider';

export default class Login extends Component {
  state = {
    message: '',
    email: '',
    password: '',
    confirmResult: null
  };

  onChangeTextEmail = email => {
    this.setState({
      email
    });
  };

  onChangeTextPass = password => {
    this.setState({
      password
    });
  };

  // Login Facebook
  onPressLoginFacebook = () => {
    Facebook.login(async (isOk, res) => {
      if (isOk) {
        res.provider = 'facebook';
        AppProvider.getContext().onLogin(res);
        this.props.navigation.navigate('Main');
      }
    });
  };

  handleSingIn = () => {
    const { email, password } = this.state;
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(confirmResult => {
        this.setState({ confirmResult, message: 'Code has been sent!' });
        AppProvider.getContext().onLogin(confirmResult);
        this.props.navigation.navigate('Main');
        DropAlert.success('thong bao', 'Dang nhap thanh cong');
      })
      .catch(error => {
        this.setState({ errorMessage: error.message });
        DropAlert.error('thong bao', 'Dang nhap khong thanh cong');
      });
  };

  handleSingUp = () => {
    this.props.navigation.navigate('SignUp');
  };

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.textSign}> Sign In </Text>
        <TextInput
          placeholder={'email'}
          autoCapitalize="none"
          style={styles.textInput}
          onChangeText={this.onChangeTextEmail}
          value={this.state.email}
        />
        <TextInput
          placeholder={'passWord'}
          autoCapitalize="none"
          secureTextEntry={true}
          style={styles.textInput}
          onChangeText={this.onChangeTextPass}
          value={this.state.password}
        />
        <TouchableOpacity onPress={this.handleSingIn} style={styles.btnLogin}>
          <Text style={styles.textButton}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this.handleSingUp} style={styles.btnSingup}>
          <Text style={styles.textButtonLogin}>Register</Text>
        </TouchableOpacity>
        <View style={styles.loginFacebook}>
          <TouchableOpacity onPress={this.onPressLoginFacebook}>
            <Image style={styles.icon} source={require('../images/ic_fb.png')} />
          </TouchableOpacity>
          <TouchableOpacity onPress={this.onPressLoginGoogle}>
            <Image style={styles.icon} source={require('../images/ic_gg.png')} />
          </TouchableOpacity>
        </View>
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
  textInput: {
    width: width / 1.5,
    height: 40,
    marginTop: 20,
    borderWidth: 1,
    borderColor: 'green',
    paddingHorizontal: 15,
    borderRadius: 20
  },
  btnLogin: {
    paddingHorizontal: 20,
    paddingVertical: 7,
    marginTop: 25,
    borderWidth: 1,
    borderColor: 'green',
    paddingHorizontal: 25,
    borderRadius: 20
  },
  btnSingup: {
    marginTop: 10
  },
  textButton: {
    color: 'green',
    fontWeight: '600',
    fontSize: 16
  },
  textButtonLogin: {
    color: 'red',
    marginTop: 15
  },
  textSign: {
    fontWeight: 'bold',
    fontSize: 24,
    color: '#333',
    marginBottom: 40
  },
  loginFacebook: {
    flexDirection: 'row',
    marginTop: 50
  },
  icon: {
    width: 40,
    height: 40,
    marginHorizontal: 10
  }
});
