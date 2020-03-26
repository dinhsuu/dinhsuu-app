import React, { Component } from 'react';
import { Text, View, SafeAreaView, TextInput, Dimensions, StyleSheet, TouchableOpacity, Image } from 'react-native';

const { width, height } = Dimensions.get('window');
import firebase from 'react-native-firebase';
import DropAlert from '../components/DropDownAlert';

export default class Login extends Component {
  state = {
    // user: null,
    message: '',
    // codeInput: '',
    // phoneNumber: '+84',
    email: 'testApp@gmail.com',
    passWord: '123456',
    confirmResult: null
  };

  // componentDidMount() {
  //   this.unsubscribe = firebase.auth().onAuthStateChanged(user => {
  //     if (user) {
  //       this.setState({ user: user.toJSON() });
  //     } else {
  //       // User has been signed out, reset the state
  //       this.setState({
  //         user: null,
  //         message: '',
  //         codeInput: '',
  //         phoneNumber: '+84',
  //         confirmResult: null
  //       });
  //     }
  //   });
  // }

  onChangeTextEmail = email => {
    this.setState({
      email: this.state.email
    });
  };

  onChangeTextPass = password => {
    this.setState({
      password
    });
  };

  handleSingIn = () => {
    // const { phoneNumber } = this.state;
    // this.setState({ message: 'Sending code ...' });

    // firebase
    //   .auth()
    //   .signInWithPhoneNumber(phoneNumber)
    //   .then(confirmResult => this.setState({ confirmResult, message: 'Code has been sent!' }))
    //   .catch(error => this.setState({ message: `Sign In With Phone Number Error: ${error.message}` }));
    const { email, password } = this.state;
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(confirmResult => {
        this.setState({ confirmResult, message: 'Code has been sent!' });
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
          value={this.state.phoneNumber}
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
          <Image style={styles.icon} source={require('../images/ic_fb.png')} />
          <Image style={styles.icon} source={require('../images/ic_gg.png')} />
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
    color: '#000',
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
