import { useState, useEffect } from 'react';
import { getPopularMovies } from '../services/getPopularMovies';

export const useFetchMovies = () => {
    const [popularMovies, setPopularMovies] = useState({

        movies: [],
        isLoading: true

    });

    useEffect(() => {
        getPopularMovies().then(movies => setPopularMovies({
            movies,
            isLoading: false
        }));
    }, []);

    return popularMovies;
};
