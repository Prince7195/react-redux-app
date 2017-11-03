import React from 'react';
import { connect } from 'react-redux'; 

import { Main, User } from '../component';
import { setName } from '../actions/userActions'

class App extends React.Component {

  render() {
    return (
      <div className="App">
          <div className="container-fluid">
              <Main changeUsername={this.props.setName} />
              <User username={this.props.user.name} />
          </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
    math: state.math
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setName: (name) => {
      dispatch(setName(name));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);