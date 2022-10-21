
export const searchMovies = async (query, category) => {
    const resp = await fetch(`https://api.themoviedb.org/3/search/${category}?api_key=${import.meta.env.VITE_TOKEN_API}&language=en-US&query=${query}&page=1`);

    const { results } = await resp.json();
    const movies = results.map(movie => ({
        id: movie.id,
        title: movie.title || movie.original_name,
        poster: movie.poster_path,
        date: movie.release_date || movie.first_air_date,
        backdrop: movie.backdrop_path
    }));

    return movies;
};
