import React, { Component } from 'react';
import AppContext from './AppContext';
import Context from './Context';

var self;
export default class AppProvider extends Component {
  static getContext() {
    return self && self.state;
  }

  constructor() {
    super();
    self = this;
    this.state = Context(this);
  }

  render() {
    return <AppContext.Provider value={this.state}>{this.props.children}</AppContext.Provider>;
  }
}
