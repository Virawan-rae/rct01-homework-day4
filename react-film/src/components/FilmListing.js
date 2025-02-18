import React, { Component } from 'react'
import FilmRow from './FilmRow'

class FilmListing extends Component {
  state = {
    filter: 'all',
    faves: []
  }

  handleFilterClick = filter => {
    this.setState({ filter: filter })
  }

  render() {
    const { filter } = this.state
    const { films, faves } = this.props

    const allFilms =
      filter === 'all'
        ? films.length > 0 &&
          films.map(film => (
            <FilmRow
              key={film.id}
              film={film}
              handleFaveToggle={this.props.handleFaveToggle}
              handleDetailsClick={this.props.handleDetailsClick}
            />
          ))
        : faves.length > 0 &&
          faves.map(film => (
            <FilmRow
              key={film.id}
              film={film}
              handleFaveToggle={this.props.handleFaveToggle}
              handleDetailsClick={this.props.handleDetailsClick}
            />
          ))

    return (
      <div className="film-list">
        <h1 className="section-title">FILMS</h1>
        <div className="film-list-filters">
          <div
            className={
              'film-list-filter ' +
              (this.state.filter === 'all' ? 'is-active' : '')
            }
            onClick={() => this.handleFilterClick('all')}
          >
            ALL
            <span className="section-count">{this.props.films.length}</span>
          </div>
          <div
            className={
              'film-list-filter ' +
              (this.state.filter === 'faves' ? 'is-active' : '')
            }
            onClick={() => this.handleFilterClick('faves')}
          >
            FAVES
            <span className="section-count">{this.props.faves.length}</span>
          </div>
        </div>

        {allFilms}
      </div>
    )
  }
}

export default FilmListing
