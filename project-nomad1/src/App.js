import React, { useState, useEffect } from 'react';

function App () {
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
    <div className="App">
      {loaded || <h1>Loading</h1>}
      <ul>
        {loaded && movie.map((e) => {
          console.log(e);
          return (
              <li key={e.id}>
                <h2>{e.title}</h2>
                <p>Genre : {e.genres.join(', ')}</p>
                <img src={e.medium_cover_image}/>
              </li>
          );
        })
        }
      </ul>
    </div>
  );
}

export default App;
