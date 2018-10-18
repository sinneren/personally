import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import TopMenu from './components/TopMenu';
import User from './components/User';
import * as usersActions from './actions/';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.signOut = this.signOut.bind(this);
  }
  signOut(event) {
    event.preventDefault();
    this.props.actions.signOut();
  }
  render() {
    return (
      <div className="App">
        <header className="App-header ">
          <div className="container">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
            <div className="d-flex justify-content-end">
                <TopMenu auth={this.props.state.users.auth}/>
                {this.props.state.users.auth && (
                    <User data={this.props.state.users.user} onSignout={this.signOut} />
                )}
            </div>
          </div>
        </header>
        <main className="App-intro pt-4">
          <div className="container">
            {this.props.children}
          </div>
        </main>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    state
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(usersActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)