import React, { Component } from 'react';

class Button extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: false
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({ clicked: true });
  }

  render() {
    return (
      <div>
        <button id="click" onClick={this.handleClick}>Click me</button>
        {this.state.clicked && <p id="para">Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy</p>}
      </div>
    );
  }
}

export default Button;

