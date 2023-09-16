import MovieList from "./MovieList";
import useFetch from "./useFetch";

const Home = () => {
  const {
    data: movies,
    isPending,
    error,
  } = useFetch(
    "https://api.themoviedb.org/3/discover/movie?api_key=f8d7328efe66061666afa56ddd0ddcbd&sort_by=popularity.desc&limit=10"
  );
  return (
    <div className="home">
      <header class="home-bg">
        <div className="header-content">
          <h2>
            John Wick 3: <small>Parabellum</small>
          </h2>
          <p>
            <span className="imdb">IMDb</span> 86.0/100
          </p>
          <p>
            John Wick is on the run after killing a member of the international
            assassins' guild, and with a $14 million price tag on his head, he
            is the target of hit men and women everywhere.
          </p>
        </div>
      </header>
      {error && <div>{error}</div>}
      {isPending && <div>Loading...</div>}
      {movies && <MovieList movies={movies} title="It's working" />}
    </div>
  );
};

export default Home;
