import React, { Component } from 'react'
import './Film.css'

class Film extends Component {
  render() {
    // const climateClass = this.props.climate.includes('arid') ? 'arid' : this.props.climate.includes('murky') ? 'murky' : this.props.climate.includes('frozen') ? 'frozen' :
    // this.props.climate.includes('tropical') ? 'tropical' : 'temperate'
    return (
      <div className={"film"}>
        <h2 className={"film-name " + (this.props.watched ? 'watched' : '')}>{this.props.title}</h2>
        <h3>Episode: {this.props.episode}</h3>
        <button onClick={() => {this.props.toggleWatched(this)}}>{this.props.watched ? "Whoops didn't watch that" : "Watched?"}</button>
      </div>

    )
  }
}

export default Film
