import "../css/MovieCard.css";
import { useMovieContext } from "../contexts/MovieContext";

function MovieCard({ movie }) {
    const { isFavorite, addToFavorites, removeFromFavourites } = useMovieContext();
    const favorite = isFavorite(movie.id);

    const onFavoriteClick = (e) => {
        e.preventDefault();
        favorite ? removeFromFavourites(movie.id) : addToFavorites(movie);
    };

    const posterUrl = movie.poster_path
        ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
        : "https://via.placeholder.com/500x750?text=No+Image";

    return (
        <div className="movie-card">
            <div className="movie-poster">
                <img src={posterUrl} alt={movie.title || "Untitled Movie"} />
                <div className="movie-overlay">
                    <button
                        className={`favourite-btn ${favorite ? "active" : ""}`}
                        onClick={onFavoriteClick}
                        aria-label={favorite ? "Remove from favorites" : "Add to favorites"}
                        title={favorite ? "Remove from favorites" : "Add to favorites"}
                    >
                        {favorite ? "❤️" : "🤍"}
                    </button>
                </div>
            </div>
            <div className="movie-info">
                <h3>{movie.title}</h3>
                <p>{movie.release_date?.split("-")[0] || "N/A"}</p>
            </div>
        </div>
    );
}

export default MovieCard;
