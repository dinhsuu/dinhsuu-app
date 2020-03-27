import React, { Component } from 'react';
import { Text, View, SafeAreaView, TextInput, Dimensions, StyleSheet, TouchableOpacity, Image } from 'react-native';
import AppProvider from '../helpers/AppProvider';
import AppContext from '../helpers/AppContext';

const { width, height } = Dimensions.get('window');
class Item extends Component {
  render() {
    const { email, password } = this.props;
    return (
      <AppContext.Consumer>
        {({ addText, updateText }) => {
          return (
            <SafeAreaView style={{ paddingVertical: 20 }}>
              <View style={styles.viewContent}>
                <Text style={styles.textTitle}>{addText && addText.email ? addText.email : 'dinh suu'}</Text>
                <Text style={styles.textTitle}>{addText && addText.password ? addText.password : '123456'}</Text>
              </View>
            </SafeAreaView>
          );
        }}
      </AppContext.Consumer>
    );
  }
}

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

  handleSingIn = () => {
    const { email, password } = this.state;
    const data = {
      email,
      password
    };
    AppProvider.getContext().onAddText(data);
    AppProvider.getContext().onUpdateText(data);
  };

  handleSingUp = () => {
    this.props.navigation.navigate('SignUp');
  };

  render() {
    const { email, password } = this.state;
    return (
      <SafeAreaView style={styles.container}>
        <Item />
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
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginTop: 50
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
    marginBottom: 40,
    marginTop: 50
  },
  loginFacebook: {
    flexDirection: 'row',
    marginTop: 50
  },
  icon: {
    width: 40,
    height: 40,
    marginHorizontal: 10
  },
  textTitle: {
    fontSize: 14,
    fontWeight: '600',
    marginTop: 10,
    borderColor: 'green',
    borderWidth: 1,
    width: 200,
    padding: 5
  }
});
