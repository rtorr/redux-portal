import React, { Component } from 'react';
import { Provider } from 'react-redux';
import Portal from './Portal';
import configureStore from '../store/configureStore';

const store = configureStore();

export default class extends Component {
  render() {
    return (
      <Provider store={store}>
        {() => <Portal children={this.props.children} openByClickOn={this.props.openByClickOn} />}
      </Provider>
    );
  }
}
