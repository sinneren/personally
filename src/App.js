import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import TopMenu from './components/TopMenu';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header ">
          <div className="container">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
            <TopMenu />
          </div>
        </header>
        <main className="App-intro">
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
    actions: bindActionCreators(dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)