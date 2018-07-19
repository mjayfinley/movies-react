import React, { Component } from 'react';

export class MovieList extends Component {

  handleShowMovieDetailsClick = ((movie) => {

    this.props.handleShowMovieDetails(movie)

  })


  render() {

    let movieItem = this.props.movieList.map((movie) => {
      return (
          <li key={movie.imdbID}>
            <img id="moviePoster" src={movie.Poster} alt={movie.Title}/>
            <button id="movieTitle" onClick={() => this.handleShowMovieDetailsClick(movie)}>{movie.Title}</button>
          </li>
      )
    })

    return (
      <ul>{movieItem}</ul>
    )
  }
}
