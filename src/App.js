import React, { Component } from 'react';
import User from './User';
import './App.css';

class App extends Component {
  state = {
    user: {},
    name: ''
  }

  handleInputText = (event) => {
    const textValue = event.target.value;
    this.setState({ name: textValue })
  }

  getUser = () =>{
    const { name } = this.state;
    document.getElementById('inputField').value = '';
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
          },
          name: ''
        })
      })
  }
  render() {
    const { user, name } = this.state;
    return (
      <div className="App">
        <input className="inputField" type="text" id="inputField" value={name} placeholder="Enter a github username" onChange={this.handleInputText} />
        <button className="user-button" onClick={this.getUser} disabled={!this.state.name}>Get User</button>
        {user.name && <User user={user}/>}
      </div>
    );
  }
}

export default App;
