import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Planet.css'

class Planet extends Component {
  render() {
    const climateClass = this.props.climate.includes('arid') ? 'arid' : this.props.climate.includes('murky') ? 'murky' : this.props.climate.includes('frozen') ? 'frozen' :
    this.props.climate.includes('tropical') ? 'tropical' : 'temperate'
    return (
      <div className={climateClass + " planet"}>
        <h2 className={"planet-name " + (this.props.visited ? 'visited' : '')}><Link to={'/planets/' + this.props.id}>{this.props.name}</Link></h2>
        <h3>{this.props.climate}</h3>
        <button onClick={() => {this.props.toggleVisited(this)}}>{this.props.visited ? "Whoops didn't visit that" : "Visited?"}</button>
      </div>

    )
  }
}

export default Planet
