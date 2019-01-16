import React, { Component } from 'react'
import './Planet.css'

class Planet extends Component {
  render() {
    const climateClass = this.props.climate.includes('arid') ? 'arid' : this.props.climate.includes('murky') ? 'murky' : this.props.climate.includes('frozen') ? 'frozen' :
    this.props.climate.includes('tropical') ? 'tropical' : 'temperate'
    return (
      <div className={climateClass + " planet"}>
        <h2 className={"planet-name " + (this.props.visited ? 'visited' : '')}>{this.props.name}</h2>
        <h3>{this.props.climate}</h3>
        <button onClick={() => {this.props.toggleVisited(this)}}>{this.props.visited ? "Whoops didn't visit that" : "Visited?"}</button>
      </div>

    )
  }
}

export default Planet
