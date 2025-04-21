import MovieCard from "../Components/MovieCard";
import { useState, useEffect } from "react";
import { searchMovies, getPopularMovies } from "../services/api";
import "../css/Home.css";

function Home() {
    const [searchQuery, setSearchQuery] = useState("");
    const [movies, setMovies] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadPopularMovies = async () => {
            try {
                const popularMovies = await getPopularMovies();
                setMovies(popularMovies);
            } catch (err) {
                console.error(err);
                setError("Failed to load movies...");
            } finally {
                setLoading(false);
            }
        };
        loadPopularMovies();
    }, []);

    const handleSearch = async (e) => {
        e.preventDefault();
        const trimmedQuery = searchQuery.trim();
        if (!trimmedQuery || loading) return;

        setLoading(true);
        try {
            const searchResults = await searchMovies(trimmedQuery);
            setMovies(searchResults);
            setError(null);
        } catch (err) {
            console.error(err);
            setError("Failed to search movies...");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="home">
            <form onSubmit={handleSearch} className="search-form">
                <input
                    type="text"
                    placeholder="Search for movies..."
                    className="search-input"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button type="submit" className="search-button">Search</button>
            </form>

            {loading && <p className="status-message">Loading movies...</p>}

            {error && !loading && <p className="error-message">{error}</p>}

            {!loading && !error && movies.length === 0 && (
                <p className="status-message">No movies found. Try a different keyword.</p>
            )}

            {!loading && !error && movies.length > 0 && (
                <div className="movies-grid">
                    {movies.map((movie) => (
                        <MovieCard movie={movie} key={movie.id} />
                    ))}
                </div>
            )}
        </div>
    );
}

export default Home;
