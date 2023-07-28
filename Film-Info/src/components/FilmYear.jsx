const FilmYear = ({ data }) => {
  return (
    <div className="years">
      {data.map((date) => (
        <a className="year">{date.date}</a>
      ))}
    </div>
  );
};

export default FilmYear;
