import React, { Component } from 'react'
import FilmPoster from './FilmPoster'
import Fave from './Fave'

class FilmRow extends Component {
  state = {
    isFave: false
  }

  onFaveToggle = e => {
    this.setState({ isFave: !this.state.isFave })
    this.props.handleFaveToggle(this.props.film)

    e.stopPropagation()
  }

  render() {
    const year = new Date(this.props.film.release_date).getFullYear()
    return (
      <div
        className="film-row"
        onClick={e => {
          this.props.handleDetailsClick(this.props.film)
        }}
      >
        <FilmPoster posterPath={this.props.film.poster_path} />
        <div className="film-summary">
          <h1>{this.props.film.title}</h1>
          <p>{year}</p>
        </div>
        <Fave isFave={this.state.isFave} onFaveToggle={this.onFaveToggle} />
      </div>
    )
  }
}

export default FilmRow
