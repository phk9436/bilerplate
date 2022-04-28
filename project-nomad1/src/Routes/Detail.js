import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function Detail () {
  const { id } = useParams();
  const [title, settitle] = useState('');
  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    settitle(json.data.movie.title);
  };
  useEffect(() => {
    getMovie();
  }, []);
  return (
    <h1>{title}</h1>
  );
}

export default Detail;
