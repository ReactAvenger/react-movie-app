import { Link } from 'react-router-dom'


function MovieCard(props) {
  const {
    Title: title,
    Year: year,
    imdbID: id,
    Type: type,
    Poster: poster
  } = props;

  const IMAGE_PLACEHOLDER_URL = `https://via.placeholder.com/300x500?text=${title}`;

  return (
    <div id={id} className="card">
      <Link to={`/movie/${id}`}>
        <div className="card-image waves-effect waves-block waves-light">

          {poster === "N/A" ? (
            <img className="activator" src={IMAGE_PLACEHOLDER_URL} alt={title} />
          ) : (
            <img className="activator" src={poster} alt={title} />
          )}
        </div>
      </Link>
      <div className="card-content">
        <Link to={`/movie/${id}`}>
          <span className="card-title activator grey-text text-darken-4">
            {title}
          </span>
        </Link>

        <p>
          {year} <span className="">{type}</span>
        </p>
      </div>
    </div>
  );
}

export default MovieCard;
