// components/MovieGrid.js

const MovieGrid = props => {
  const {movieData} = props
  const {title, posterPath, voteAverage} = movieData
  return (
    <li>
      <img src={`https://image.tmdb.org/t/p/w500/${posterPath}`} alt={title} />
      <h3>{title}</h3>
      <p>Rating: {voteAverage}</p>
      <button type="button">View Details</button>
    </li>
  )
}

export default MovieGrid
