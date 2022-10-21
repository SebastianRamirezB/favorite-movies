import { useState, useEffect } from 'react';
import { searchMovies } from '../services/searchMovies';

export const useSearchMovies = (query, category) => {
    const [data, setData] = useState({
        movies: [],
        isLoading: true
    });

    useEffect(() => {
        if (!query) return;
        searchMovies(query, category).then(movies => setData({
            movies,
            isLoading: false
        }));
    }, [query, category]);

    return data;
};
