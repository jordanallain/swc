import React, { Component } from 'react';

class Welcome extends Component {
  render() {
    return (
      <React.Fragment>
        <h1>Welcome</h1>
        <ul><strong>Movies you've seen:</strong> {this.props.watchedMovies[0] ? this.props.watchedMovies.map(movie => <li>{movie.title}</li>) : <p>none yet!</p>}</ul>
        <ul><strong>Planets you've visited:</strong> {this.props.visitedPlanets[0] ? this.props.visitedPlanets.map(planet => <li>{planet.name}</li>) : <p>none yet!</p>}</ul>
      </React.Fragment>
    )
  }
}

export default Welcome;
