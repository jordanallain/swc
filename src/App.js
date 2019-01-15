import React, { Component } from 'react'
import axios from 'axios'
import Planet from './Planet'
import './App.css'
import { Route } from 'react-router-dom'
import Welcome from './Welcome'
import Nav from './Nav'

class App extends Component {
  state = {
    planets: []
  }
  toggleVisited = (planet) => {
    const planetArray = this.state.planets.map(plan => plan)
    const currentPlanet = planetArray.find(plan => plan.name === planet.props.name)
    currentPlanet.visited = !currentPlanet.visited
    const index = planetArray.indexOf(planet)
    planetArray[index] = currentPlanet
    this.setState({planets: planetArray})
  }
  componentDidMount() {
    axios('https://swapi.co/api/planets')
      .then(resp => {
        let planetArray = resp.data.results.map(planet => ({climate: planet.climate, name:planet.name, visited: false})
      )
      this.setState({planets: planetArray})
    })
  }
  render() {
    return (
      <div className="App">
        <Nav className="nav"/>
        <Route exact path='/' component={Welcome} />
        <Route path='/planets' render={() => (
          <div className="planet-container">
            {this.state.planets[0] ? this.state.planets.map((planet) => (
              <Planet
                toggleVisited={this.toggleVisited}
                key={planet.name}
                name={planet.name}
                climate={planet.climate}
                visited={planet.visited}/>
            )) : 'loading...'}
          </div>
          )} />
      </div>
    )
  }
}

export default App;
