import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { Rating } from "react-simple-star-rating";

const FilmYear = ({ data, date }) => {
  const maxRating = 10;

  return (
    <div>
      {data
        .filter((filt) => filt.date === date)
        .map((film) => (
          <div className="filmInfo" key={uuidv4()}>
            <h1>{film.title}</h1>
            <p>{film.body}</p>
            <h3>{film.tags}</h3>
            <h2>
              <Rating ratingValue={film.rate} maxStars={maxRating} />
              {film.rate}/{maxRating}
            </h2>
          </div>
        ))}
    </div>
  );
};

export default FilmYear;
