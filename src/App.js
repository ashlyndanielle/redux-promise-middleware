import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getPeople } from './redux/starwars';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  render() {
    const { loading } = this.props;
    const people = this.props.people.map( (person, i) => {
      return <div key={i}>{ person.name }</div>
    })
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Redux Promise Middleware</h1>
        </header>
        <button onClick={ this.props.getPeople }>Get Star Wars People</button>
        <h4>Loading: { loading }</h4>
        { loading ? 'fetching people...' : <div>{ people }</div> }
      </div>
    );
  }
}

function mapStateToProps(state) {
  return{
    // have to add in the starwars below because of the "combineReducers" function in the store
    // we have to specify which reducer we are accessing
    people: state.starwars.people,
    loading: state.starwars.loading
  }
}

export default connect(mapStateToProps, { getPeople })(App);
