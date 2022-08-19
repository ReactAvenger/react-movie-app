import MovieCard from "./MovieCard";

function Movies(props) {
  const { movies = [] } = props;
  return (
    <div className="movies">
      {movies.length ? (
        movies.map((movie) => <MovieCard key={movie.imdbID} {...movie} />)
      ) : (
        <h4>Nothing found</h4>
      )}
    </div>
  );
}

export default Movies;
