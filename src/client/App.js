import React, { Component } from 'react';
import './app.css';
import Auth from './Auth/Auth.js';
// import ReactImage from './react.png';

const auth = new Auth();
auth.login();

export default class App extends Component {
  // state = { username: null };

  componentDidMount() {
    // fetch('/api/getUsername')
    //   .then(res => res.json())
    //   .then(user => this.setState({ username: user.username }));
  }

  render() {
    // const { username } = this.state;
    return (
      <div>Welcome to Instaprune</div>
      );
  }
}
