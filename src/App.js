import React, { Component } from 'react'
import axios from 'axios'
import Planet from './Planet'
import Film from './Film'
import './App.css'
import { Route } from 'react-router-dom'
import Welcome from './Welcome'
import Nav from './Nav'

class App extends Component {
  state = {
    planets: [],
    films: []
  }
  toggleVisited = (planet) => {
    const planetArray = this.state.planets.map(plan => plan)
    const currentPlanet = planetArray.find(plan => plan.name === planet.props.name)
    currentPlanet.visited = !currentPlanet.visited
    const index = planetArray.indexOf(planet)
    planetArray[index] = currentPlanet
    this.setState({planets: planetArray})
  }
  toggleWatched = (film) => {
    const filmArray = this.state.films.map(movie => movie)
    const currentFilm = filmArray.find(movie => movie.title === film.props.title)
    currentFilm.watched = !currentFilm.watched
    const index = filmArray.indexOf(film)
    filmArray[index] = currentFilm
    this.setState({films: filmArray})
  }
  componentDidMount() {
    axios('https://swapi.co/api/planets')
      .then(resp => {
        let planetArray = resp.data.results.map(planet => ({climate: planet.climate, name:planet.name, visited: false})
      )
      this.setState({planets: planetArray})
    })
    axios('https://swapi.co/api/films')
      .then(resp => {
        let filmArray = resp.data.results.map(film => ({title: film.title, episode: film.episode_id, watched: false}))
        this.setState({films: filmArray})
      })
  }
  render() {
    const watchedMovies = this.state.films.filter(movie => movie.watched)
    const visitedPlanets = this.state.planets.filter(plan => plan.visited)
    return (
      <div className="App">
        <Nav className="nav"/>
        <Route exact path='/' render={() => (
            <Welcome
              watchedMovies={watchedMovies}
              visitedPlanets={visitedPlanets}
              />
          )} />
        <Route path='/planets' render={() => (
          <div className="planet-container">
            {this.state.planets[0] ? this.state.planets.map(planet => (
              <Planet
                toggleVisited={this.toggleVisited}
                key={planet.name}
                name={planet.name}
                climate={planet.climate}
                visited={planet.visited}/>
            )) : 'loading...'}
          </div>
          )} />
        <Route path='/films' render={() => (
            <div className="film-container">
              {this.state.films[0] ? this.state.films.map(film => (
                <Film toggleWatched={this.toggleWatched}
                  key={film.episode}
                  episode={film.episode}
                  title={film.title}
                  watched={film.watched}/>
              )) : 'loading...'}
            </div>
          )}/>
      </div>
    )
  }
}

export default App;
