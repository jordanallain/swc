import React, { Component } from 'react'
import axios from 'axios'
import Planet from './Planet'
import './App.css'
import { Route, Link } from 'react-router-dom'
import Welcome from './Welcome'

class App extends Component {
  state = {
    planets: []
  }
  componentDidMount() {
    axios('https://swapi.co/api/planets')
      .then(resp => {
        console.log(resp.data.results)
        let planetArray = resp.data.results.map(planet => (<Planet
        key={planet.name}
        climate={planet.climate}
        name={planet.name}
        />)
      )
      this.setState({planets: planetArray})
    })
  }
  render() {
    console.log(this.state.planets)
    return (
      <div className="App">
        <Link to='/planets'>Planets</Link>
        <Route exact path='/' component={Welcome} />
        <Route path='/planets' render={() => (
          <div className="container">
            {this.state.planets[0] ? this.state.planets : '...'}
          </div>
          )} />
      </div>
    )
  }
}

export default App;
