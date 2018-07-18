import React, { Component } from 'react';

export class MovieList extends Component {

  //http://www.omdbapi.com/?s=batman&apikey=b70d5171

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


//href={`http://www.omdbapi.com/?i=${movie.imdbID}&apikey=b70d5171`}
