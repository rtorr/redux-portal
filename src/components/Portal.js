import React from 'react';
import ReactDOM from 'react-dom';

var Portal = React.createClass({

  propTypes: {
    children: React.PropTypes.element.isRequired,
    onClose: React.PropTypes.func
  },

  componentWillMount() {
    if (this.props.portal.active) {
      this.openPortal();
    }
  },

  componentWillUnmount() {
    this.closePortal();
  },

  closePortal() {
    if (this.node) {
      ReactDOM.unmountComponentAtNode(this.node);
      document.body.removeChild(this.node);
    }
    this.portal = null;
    this.node = null;
  },

  handleClose() {
    const { close } = this.props;
    close();
  },

  renderPortal() {
    const { open } = this.props;
    if (!this.node) {
      this.node = document.createElement('div');
      document.body.appendChild(this.node);
      this.portal = ReactDOM.render(React.cloneElement(this.props.children, {handleClose: this.handleClose}), this.node);
    }
    open();
  },

  componentDidUpdate() {
    switch (this.props.portal.active) {
      case true:
        if (this.node) {
          this.portal = ReactDOM.render(React.cloneElement(this.props.children, {handleClose: this.handleClose}), this.node);
        }
        break;
      default:
        this.closePortal();
        break;
    }
  },

  openPortal(e) {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    this.renderPortal();
  },

  render() {
    let p;
    if (this.props.openByClickOn) {
      p = <div className="Portal__open-by-click-on" onClick={this.openPortal}>{this.props.openByClickOn}</div>;
    } else {
      p = null;
    }
    return p;
  }

});

export default Portal;
