import React from 'react';
import Counter from './Counter';
import Match from 'react-router/Match';
import Link from 'react-router/Link';

const Home = () => (
  <div>
    <h1>Home</h1>
    <Link to="/about">About</Link>
  </div>
);

const About = () => (
  <div>
    <h1>About2</h1>
    <Counter />
  </div>
);

export default class App extends React.Component {
  
  render() {
    return (
      <div>
        <Match pattern="/about" component={About} />
        <Match exactly pattern="/" component={Home} />
      </div>
    );
  }
  
}