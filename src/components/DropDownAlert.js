import React, { PureComponent } from 'react';
import DropdownAlert from 'react-native-dropdownalert';

var refDropdownAlert = null;
export default class DropAlert extends PureComponent {
  static error(title, message) {
    refDropdownAlert.alertWithType('error', title, message);
  }

  static success(title, message) {
    refDropdownAlert.alertWithType('success', title, message);
  }

  static info(title, message) {
    refDropdownAlert.alertWithType('info', title, message);
  }

  static warn(title, message) {
    refDropdownAlert.alertWithType('warn', title, message);
  }

  componentWillUnmount() {
    refDropdownAlert = null;
  }

  render() {
    return (
      <DropdownAlert
        inactiveStatusBarBackgroundColor={'rgba(255,255,255,0)'}
        successImageSrc={null}
        infoImageSrc={null}
        warnImageSrc={null}
        errorImageSrc={null}
        translucent={true}
        inactiveStatusBarStyle={'dark-content'}
        ref={refs => (refDropdownAlert = refs)}
      />
    );
  }
}
