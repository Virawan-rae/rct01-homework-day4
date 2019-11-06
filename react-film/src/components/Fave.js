import React, { Component } from 'react'

class Fave extends Component {
  handleClick = e => {
    this.props.onFaveToggle(e)
    e.stopPropagation()
  }
  render() {
    return (
      <div
        className={
          'film-row-fave ' +
          (this.props.isFave ? 'remove_from_queue' : 'add_to_queue')
        }
        onClick={e => {
          this.handleClick(e)
        }}
      >
        <p className="material-icons">add_to_queue</p>
      </div>
    )
  }
}

export default Fave
