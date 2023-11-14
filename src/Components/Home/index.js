// pages/HomePage.js
import {Component} from 'react'
import MovieGrid from '../MovieGrid'

import './index.css'

class Home extends Component {
  state = {
    popularMovies: [],
  }

  componentDidMount() {
    this.getSuccess()
  }

  getSuccess = async () => {
    const apiUrl = `https://api.themoviedb.org/3/movie/popular?api_key=7f1353008c0828f4f91dcfef82570ba4&language=en-US&page=1`

    const response = await fetch(apiUrl)
    if (response.ok) {
      const fetchedData = await response.json()
      const updatedData = fetchedData.results.map(movie => ({
        id: movie.id,
        title: movie.title,
        posterPath: movie.poster_path,
        voteAverage: movie.vote_average,
      }))
      this.setState({
        popularMovies: updatedData,
      })
    }
  }

  render() {
    const {popularMovies} = this.state
    return (
      <ul className="products-list">
        {popularMovies.map(movie => (
          <MovieGrid movieData={movie} key={movie.id} />
        ))}
      </ul>
    )
  }
}

export default Home
