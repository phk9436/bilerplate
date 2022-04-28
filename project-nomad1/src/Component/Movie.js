import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
function Movie ({ movie }) {
  return (
    <ul>
    {movie.map((e) => {
      console.log(e);
      return (
          <li key={e.id}>
            <h2><Link to={`movie/${e.id}`}>{e.title}</Link></h2>
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
