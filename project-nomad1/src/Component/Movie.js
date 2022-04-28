import React from 'react';
import PropTypes from 'prop-types';
import { Link, useParams } from 'react-router-dom';
function Movie ({ movie }) {
  console.log(useParams());
  return (
    <ul>
    {movie.map((e) => {
      return (
          <li key={e.id}>
            <h2><Link to={`/movie/${e.id}`}>{e.title}</Link></h2>
            <p>Genre : {e.genres.join(', ')}</p>
            <img src={e.medium_cover_image}/>
          </li>
      );
    })
    }
  </ul>
  );
}

Movie.propTypes = {
  movie: PropTypes.array.isRequired
};

export default Movie;
