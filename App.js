import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
// import OneSignal from 'react-native-onesignal';
import ManiNavigation from './src/routers/ManiNavigation';
import AppProvider from './src/helpers/AppProvider';
import DropAlert from './src/components/DropDownAlert';

class App extends React.Component {
  // constructor(props) {
  //   super(props);
  //   OneSignal.init('5ea85c5a-5d73-4610-9616-2c945dbc0078');
  //   OneSignal.inFocusDisplaying(2);
  //   OneSignal.addEventListener('received', this.onReceived);
  //   OneSignal.addEventListener('opened', this.onOpened);
  //   OneSignal.addEventListener('ids', this.onIds);
  // }
  // componentWillUnmount() {
  //   OneSignal.removeEventListener('received', this.onReceived);
  //   OneSignal.removeEventListener('opened', this.onOpened);
  //   OneSignal.removeEventListener('ids', this.onIds);
  // }

  // onReceived(notification) {
  //   console.log('Notification received: ', notification);
  // }

  // onOpened(openResult) {
  //   console.log('Message: ', openResult.notification.payload.body);
  //   console.log('Data: ', openResult.notification.payload.additionalData);
  //   console.log('isActive: ', openResult.notification.isAppInFocus);
  //   console.log('openResult: ', openResult);
  // }

  // onIds(device) {
  //   console.log('Device info: ', device);
  // }

  render() {
    return (
      <AppProvider style={styles.container}>
        <ManiNavigation />
        <DropAlert />
      </AppProvider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default App;
