import { useState } from 'react';

import './styles.css';

export const FilterCategory = ({ setCategory }) => {
    const [selectedCategory, setSelectedCategory] = useState('movie');
    const handleClick = (category) => {
        setSelectedCategory(category);
        setCategory(category);
    };

    return (
        <div className="filters">
            <p
                onClick={() => handleClick('movie')}
                className={`filter-item ${selectedCategory === 'movie' && 'active'}`}
            >
                Movies
            </p>

            <p
                onClick={() => handleClick('tv')}
                className={`filter-item ${selectedCategory === 'tv' && 'active'}`}
            >
                Tv Show
            </p>
        </div>
    );
};
