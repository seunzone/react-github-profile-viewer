import React, { Component } from 'react';
import User from './User';
import './App.css';

class App extends Component {
  state = {
    user: {}
  }
  getUser = () =>{
    const name = this.refs.name.value;
    fetch(`http://api.github.com/users/${name}`)
      .then(response=> response.json())
      .then(data=> {
        console.log(data);
        this.setState({
          user: {
            name: data.name,
            location: data.location,
            followers: data.followers,
            following: data.following,
            public_repos: data.public_repos
          }
        })
      })
  }
  render() {
    const { user } = this.state;
    return (
      <div className="App">
        <input type="text" placeholder="Enter a github username" ref="name" />
        <button onClick={this.getUser}>Get User</button>
        <User user={user}/>
      </div>
    );
  }
}

export default App;
