import React, { Component } from 'react';

export class MovieList extends Component {

  //http://www.omdbapi.com/?s=batman&apikey=b70d5171

  constructor(props) {
    super(props)

    console.log("constructor")

    this.state = {
      movies : []
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

  componentWillMount() {
    console.log("componentWillMount")
  }

  componentDidMount() {
    this.populateMovies()
  }


  render() {

    let movieItem = this.state.movies.map((movie) => {
      return (
          <li key={movie.imdbID}>
            <img id="moviePoster" src={movie.Poster} alt={movie.Title}/>
            <label id="movieTitle">{movie.Title}</label>
          </li>
      )
    })

    return (
      <ul>{movieItem}</ul>
    )
  }
}
