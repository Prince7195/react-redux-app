import React, { Component } from 'react';

import { Main, User } from './component';

class App extends Component {

  constructor() {
    super();
    this.state = {
      username: "Vijay"
    }
  }

  changeUsername(newName) {
    this.setState({username: newName})
  }

  render() {
    return (
      <div className="App">
          <div className="container-fluid">
              <Main changeUsername={this.changeUsername.bind(this)} />
              <User username={this.state.username} />
          </div>
      </div>
    );
  }
}

export default App;
