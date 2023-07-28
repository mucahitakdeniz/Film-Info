const FilmYear = ({ data, setDate }) => {
  return (
    <div className="years">
      {data.map((date) => (
        <a onClick={() => setDate(date.date)} className="year">
          {date.date}
        </a>
      ))}
    </div>
  );
};

export default FilmYear;
