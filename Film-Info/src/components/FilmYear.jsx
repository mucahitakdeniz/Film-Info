import { useState } from "react";

const FilmYear = ({ data, setDate }) => {
  const [activeIndex, setActiveIndex] = useState(null);
  const hanhleClick = (index) => {
    setDate(data[index].date);
    setActiveIndex(index);
  };
  return (
    <div className="years">
      {data.map((date, index) => (
        <a
          key={index}
          onClick={() => hanhleClick(index)}
          className="year"
          style={{
            color: activeIndex === index ? "red" : "black",
            textDecorationLine: activeIndex === index ? "underline" : "none",
          }}
        >
          {date.date}
        </a>
      ))}
    </div>
  );
};

export default FilmYear;
