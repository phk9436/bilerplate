import React, { useState, useEffect } from 'react';
import Movie from '../Component/Movie';

function Home () {
  const [loaded, setloaded] = useState(false);
  const [movie, setMovie] = useState([]);
  const getMovies = async () => {
    const json = await (
      await fetch('https://yts.mx/api/v2/list_movies.json?minimum_rating=8&sort_by=year')
    ).json();
    setMovie(json.data.movies);
    setloaded(true);
  };
  useEffect(() => {
    getMovies();
  }, []);
  return (
      <div>
        {loaded || <h1>Loading</h1>}
        {loaded && <Movie movie={movie} loaded={loaded}></Movie>}
      </div>
  );
}

export default Home;
