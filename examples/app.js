import React from 'react';
import ReactDOM from 'react-dom';
import Portal from './../lib';

var activeStyle = {
  position: 'fixed',
  top: '0',
  left: '0',
  right: '0',
  bottom: '0',
  zIndex: '2000'
};

var backgroundStyle = {
  background: 'rgba(0, 0, 0, 0.6)',
  position: 'fixed',
  top: '0',
  left: '0',
  right: '0',
  bottom: '0',
  cursor: 'pointer'
};

var modalContent = {
  position: 'relative',
  zIndex: '3000'
};

var Modal = React.createClass({
  render() {
    const { handleClose } = this.props;
    return (
      <div style={activeStyle}>
        <div style={backgroundStyle} onClick={handleClose}></div>
        <div style={modalContent}>
          {this.props.children}
          <button onClick={this.props.handleClose}>close modal</button>
        </div>
      </div>
    );
  }
});

var Button = React.createClass({
  render() {
    var OpenButton = <button>Open Modal</button>;
    return (
      <div>
        <Portal openByClickOn={OpenButton}>
          <Modal>
            <p>this is a modal ONEsssssssss!!</p>
          </Modal>
        </Portal>
      </div>
    );
  }
});

var Controller = React.createClass({
  render() {
    return (
      <div>
        <Button />
      </div>
    );
  }
});

ReactDOM.render(<Controller />, document.getElementById('example'));
