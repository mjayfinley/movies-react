import React, { Component } from 'react';
import {MovieList} from './components/MovieList'
import './App.css';
import './Styles.css'

class App extends Component {
  render() {
    return (
      <div id="container">
        <h1>Batman Movies!</h1>

        <MovieList />

      </div>



    );
  }
}

export default App;
