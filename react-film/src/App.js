import React, { Component } from 'react'
import dotenv from 'dotenv'
import TMDB from './TMDB'
import FilmListing from './components/FilmListing'
import FilmDetails from './components/FilmDetails'
import './App.css'
dotenv.config()

class App extends Component {
  state = {
    films: TMDB.films,
    faves: [],
    current: null
  }

  handleFaveToggle = film => {
    let faves = this.state.faves
    const filmIndex = faves.indexOf(film)

    if (filmIndex === -1) {
      faves = [...faves, film]
    } else {
      faves.splice(filmIndex, 1)
    }
    this.setState({ faves })
  }

  handleDetailsClick = film => {
    const url = `https://api.themoviedb.org/3/movie/${film.id}?api_key=${TMDB.api_key}&append_to_response=videos,images&language=en`
    fetch(url)
      .then(response => response.json())
      .then(data => this.setState({ current: data }))
  }

  render() {
    const { faves, current, films } = this.state

    return (
      <div className="film-library">
        <FilmListing
          films={films}
          faves={faves}
          handleFaveToggle={this.handleFaveToggle}
          handleDetailsClick={this.handleDetailsClick}
        />
        <FilmDetails films={current} />
      </div>
    )
  }
}

export default App
