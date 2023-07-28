import FilmInfo from "../components/FilmInfo";
import FilmYear from "../components/FilmYear";
import { data } from "../helper/data";
import { useState } from "react";

const Main = () => {
  const [date, setDate] = useState("2022");
  return (
    <div className="main">
      <FilmYear setDate={setDate} data={data} />
      <FilmInfo date={date} data={data} />
    </div>
  );
};

export default Main;
