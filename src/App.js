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
    if (textValue.length > 1) {
      this.setState({ name: textValue });
    } else {
      this.setState({ name: '' });
    }
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
        })
      })
  }
  render() {
    const { user } = this.state;
    return (
      <div className="App">
        <input type="text" id="inputField" placeholder="Enter a github username" onChange={this.handleInputText} />
        <button onClick={this.getUser}>Get User</button>
        <User user={user}/>
      </div>
    );
  }
}

export default App;
