import React from 'react';

const movieData = []



const MovieCard = props => {
  const movie = props.movieData.find(movie => movie.id === parseInt(props.match.params.movieId,10))
  return(
    <div className="movie-card">
      <h2>{movie.title}</h2>
      <div className="movie-director">
        Director: <em>{movie.director}</em>
      </div>
      <div className="movie-metascore">
        Metascore: <strong>{movie.metascore}</strong>
      </div>
      <h3>Actors</h3>

      {movie.stars.map(star => (
        <div key={star} className="movie-star">
          {star}
        </div>
      ))}
   
    </div>
  );
};

export default MovieCard;
