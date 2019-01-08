import React, { Component } from 'react';
import './Planet.css'

class Planet extends Component {
  handleClick = () => {

    this.setState(prevState => {return {
      visited: !this.state.visited
    }})
  }
  state = {
    visited: false
  }
  render() {
    return (
      <div className='planet'>
        <h2 className="planet-name">{this.props.name}</h2>
        <h3>{this.props.climate}</h3>
        <button onClick={this.handleClick}>{this.state.visited ? "Whoops didn't visit that" : "Visited?"}</button>
      </div>

    )
  }
}

export default Planet;
