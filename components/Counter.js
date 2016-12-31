import React from 'react';
import styled from 'styled-components';

const doStuff = async function() {
  await wait(5000);
  console.log("hey");
  await wait(5000);
  console.log("hey");
}

const wait = async function(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

const Button = styled.button`
  background: blue;
  border: none;
  padding: 5px 10px;
  color: white;
  -webkit-appearance: none;
`;

export default class Counter extends React.Component {
  
  static contextTypes = {
    isServer: React.PropTypes.any.isRequired
  };
  
  constructor() {
    super();
    this.state = {value: 0};
  }
  
  render() {
    
    if(!this.context.isServer) {
      doStuff();
    }
    
    return (
      <div>{this.state.value} {this.context.cool} <Button onClick={() => this.setState({value: this.state.value+1})}>Increment</Button></div>
    )
    
  }
  
}