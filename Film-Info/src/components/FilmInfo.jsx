import React from 'react';
import { v4 as uuidv4 } from 'uuid';

const FilmYear = ({ data,date }) => {
  return (
    <div>
      {data.filter((filt)=>filt.date==date).map((film) => (
        <div className="filmInfo" key={uuidv4()}>
          <h1>{film.title}</h1>
          <p>{film.body}</p>
          <h3>{film.tags}</h3>
          <h2>
            <span>⭐⭐⭐⭐⭐</span>
            {film.rate}/10
          </h2>
        </div>
      ))}
    </div>
  );
};

export default FilmYear;
