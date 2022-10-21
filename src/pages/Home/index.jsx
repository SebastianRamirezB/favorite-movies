import { useState } from 'react';

import { CarouselMovies } from '../../components/CarouselMovies';
import { FavoriteMovies } from '../../components/FavoriteMovies';
import { FilterCategory } from '../../components/FilterCategory';
import { Search } from '../../components/Search';

import { useSearchMovies } from '../../hooks/useSearchMovies';
import './styles.css';

const Home = () => {
    const [query, setQuery] = useState('');
    const [category, setCategory] = useState('movie');

    const onSearch = (query) => {
        setQuery(query);
    };

    const { movies } = useSearchMovies(query, category);

    return (
        <>
            <FavoriteMovies />
            <div className="nav-search">
                <FilterCategory setCategory={setCategory} />
                <Search onSearch={onSearch} />
            </div>
            <h1 className="title-search">{query}</h1>
            <CarouselMovies movies={movies} />
        </>
    );
};

export default Home;
