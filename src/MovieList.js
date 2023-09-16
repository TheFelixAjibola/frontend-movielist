import { Link } from "react-router-dom/cjs/react-router-dom.min";
import Card from "./Card";

const MovieList = ({ movies }) => {
  return (
    <div className="movie-grid">
      <h2>Top 10 Movies</h2>
      <div className="movie-posters">
        {movies.results.slice(0, 10).map((movie) => (
          <Link to={`/movies/${movie.id}`} key={movie.id}>
            <Card movie={movie} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default MovieList;
