import { useContext } from "react";
import { MoviesContext } from "../context/MoviesContext";
import MyCard from "../components/MyCard";

const Home = () => {
  const { movies } = useContext(MoviesContext);
  return (
    <>
      <div className="container">
        <div className="row">
          {movies &&
            movies.map((movie) => <MyCard key={movie.id} movie={movie} />)}
        </div>
      </div>
    </>
  );
};

export default Home;
