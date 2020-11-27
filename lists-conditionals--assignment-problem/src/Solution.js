import React, { Component } from 'react';
import {CharComponent, ValidationComponent} from './Misc';

class Solution extends Component {

  state = {text: ''}

  updateText = (event) => {
    this.setState({text: event.target.value});
  }

  removeCharHandler = (event, charIndex) => {
    const chars = this.state.text.split('');
    chars.splice(charIndex, 1);
    this.setState({text: chars.join('')});
  }

  render(){
    const charComponents = this.state.text.split('').map(
      (char, charIndex) => (<CharComponent key={charIndex} char={char} onClick={(event) => this.removeCharHandler(event, charIndex)} />));
    return (
    <div>
      <input onChange={this.updateText} value={this.state.text}/>
      <p> Length of the text: {this.state.text.length}</p>
      <ValidationComponent textLength={this.state.text.length}/>
      {charComponents}
    </div>);
  }
}

export default Solution;