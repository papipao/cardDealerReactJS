import React, { Component } from "react";

class GithubUserInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
    };
  }

  async componentDidMount() {
    const res = await fetch(`https://api.github.com/users`);
    const data = await res.json();
    console.log(data);
    this.setState({ users: data });
  }

  render() {
    return (
      <div>
        <h1>Github User Info</h1>
        <ul>
          {this.state.users.map((user) => {
            return (
              <div key={user.id}>
                <li>{user.login}</li>
                <img src={user.avatar_url} alt={user.login} />
              </div>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default GithubUserInfo;
