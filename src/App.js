import React, { Component } from 'react';
import {MovieList} from './components/MovieList'
import {Movie} from './components/Movie'
import './App.css';
import './Styles.css'

class App extends Component {

  constructor(props) {
    super(props)

    console.log("constructor")

    this.state = {
      movies : [],
      movieDetails : []
    }

  }

  populateMovies() {

    fetch("http://www.omdbapi.com/?s=batman&apikey=b70d5171")
    .then((response) => response.json())
    .then((json) => {

      this.setState({
        movies : json.Search
      })
    })
  }

  populateMovieDetails(movie) {

    let movieID = movie.imdbID

    fetch("http://www.omdbapi.com/?i="+movieID+"&apikey=b70d5171")
    .then((response) => response.json())
    .then((json) => {

      this.setState({
        movieDetails : this.state.movieDetails.concat(json)
      })
    })
  }


  componentDidMount() {
    this.populateMovies()
  }

  handleShowMovieDetails = ((movie) => {

    this.populateMovieDetails(movie)

  })

  render() {
    return (
      <div id="container">
        <h1>Batman Movies!</h1>

        <MovieList movieList={this.state.movies} handleShowMovieDetails={this.handleShowMovieDetails} />

        <Movie movieDetail={this.state.movieDetails}/>

      </div>



    );
  }
}

export default App;
