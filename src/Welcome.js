import React, { Component } from 'react'
import './Welcome.css'

class Welcome extends Component {
  render() {
    return (
      <React.Fragment>
        <h1>Welcome</h1>
        <div className="lists">
          <ul><strong className="list-header">Movies you've seen:</strong> {this.props.watchedMovies[0] ? this.props.watchedMovies.map(movie => <li key={movie.title}>{movie.title}</li>) : <p>none yet!</p>}</ul>
          <ul><strong className="list-header">Planets you've visited:</strong> {this.props.visitedPlanets[0] ? this.props.visitedPlanets.map(planet => <li key={planet.name}>{planet.name}</li>) : <p>none yet!</p>}</ul>
        </div>
      </React.Fragment>
    )
  }
}

export default Welcome;
