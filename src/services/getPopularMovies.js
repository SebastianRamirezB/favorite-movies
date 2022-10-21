
export const getPopularMovies = async () => {
    const data = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${import.meta.env.VITE_TOKEN_API}&language=en-US`);

    const { results } = await data.json();

    const movies = results.map(movie => ({
        id: movie.id,
        title: movie.title,
        poster: movie.poster_path,
        date: movie.release_date,
        backdrop: movie.backdrop_path
    }));

    return movies;
};
