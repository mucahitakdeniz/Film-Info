import FilmInfo from "../components/FilmInfo";
import FilmYear from "../components/FilmYear";
import {data} from "../helper/data";

const Main = () => {
  return (
    <div className="main">
      <FilmYear data={data} />
      <FilmInfo  data={data}/>
    </div>
  );
};

export default Main;
