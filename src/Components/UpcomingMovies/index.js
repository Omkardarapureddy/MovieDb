// pages/HomePage.js
import {Component} from 'react'
import MovieGrid from '../MovieGrid'

class UpcomingMovies extends Component {
  state = {
    comingMovies: [],
  }

  componentDidMount() {
    this.getSuccess()
  }

  getSuccess = async () => {
    const apiUrl = `https://api.themoviedb.org/3/movie/upcoming?api_key=7f1353008c0828f4f91dcfef82570ba4&language=en-US&page=1`

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
        comingMovies: updatedData,
      })
    }
  }

  render() {
    const {comingMovies} = this.state
    return (
      <ul className="products-list">
        {comingMovies.map(movie => (
          <MovieGrid movieData={movie} key={movie.id} />
        ))}
      </ul>
    )
  }
}

export default UpcomingMovies
