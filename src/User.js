import React, { Component } from 'react';

class User extends Component {
  render() {
    const { user } = this.props;
    return (
      <div>
          <h2>Details of User</h2>
          <h4>Name: {user.name}</h4>
          <h4>Location: {user.location}</h4>
          <h4>Followers: {user.followers}</h4>
          <h4>following: {user.following}</h4>
          <h4>Public Repos: {user.public_repos}</h4>
      </div>
    );
  }
}

export default User;
