import { useRef } from 'react';
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from 'react-icons/md';
import { useFetchMovies } from '../../hooks/useFetchMovies';

import { CardMovie } from '../CardMovie';
import './styles.css';

export const CarouselMovies = ({ movies }) => {
    const refCarousel = useRef();
    const { movies: popularMovies } = useFetchMovies();

    const moveCarousel = (direction) => {
        if (direction === 'right') {
            refCarousel.current.scrollLeft += 300;
        } else {
            refCarousel.current.scrollLeft -= 300;
        }
    };

    return (
        <div ref={refCarousel} className='carousel'>

            <button
                className=" carousel-button left"
                onClick={() => moveCarousel('left')}
            >
                <MdKeyboardArrowLeft size="3rem" color="white" />
            </button>

            <div className='carousel-items'>
                {
                    movies.length === 0
                        ? (
                            popularMovies.map(movie => (
                                <CardMovie key={movie.id} movie={movie} />
                            ))

                        )
                        : (movies.map(movie => (
                            <CardMovie key={movie.id} movie={movie} />
                        )))

                }
            </div>

            <button
                className=" carousel-button right"
                onClick={() => moveCarousel('right')}
            >
                <MdKeyboardArrowRight size="3rem" color="white" />

            </button>

        </div>
    );
};
