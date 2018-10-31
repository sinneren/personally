import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import TopMenu from './components/TopMenu';
import User from './components/User';
import * as usersActions from './actions/UserActions';
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
            <h1 className="App-title">Prsnlly</h1>
            <div className="d-flex justify-content-end">
                <TopMenu auth={this.props.state.users.auth}/>
                {this.props.state.users.auth && (
                    <User data={this.props.state.users.user} onSignout={this.signOut} />
                )}
            </div>
          </div>
        </header>
        <main className="App-intro pt-4">
          <div className={(this.props.location.pathname === '/tasks') ? 'container-fluid' : 'container'}>
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
App.propTypes = {
  children: PropTypes.node,
}
export default connect(mapStateToProps, mapDispatchToProps)(App)