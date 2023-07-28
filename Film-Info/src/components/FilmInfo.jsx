const FilmInfo = ({ data, date }) => {
  const film = data.filter((data) => data.date === date)
  console.log(data);
  console.log(film);
  return (
    <>
      <div className="filmInfo" key={film.id}>
        <h1>{film.title}</h1>
        <p>{film.body}</p>
        <h3>{film.tags}</h3>
        <h2>
          <span>⭐⭐⭐⭐⭐</span>
          {film.rate}/10
        </h2>
      </div>
    </>
  );
};

export default FilmInfo;
