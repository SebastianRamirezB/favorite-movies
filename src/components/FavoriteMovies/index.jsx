import { useState } from 'react';
import { CardTop } from '../CardTop';
import './styles.css';

export const FavoriteMovies = () => {
    const [movieOne, setMovieOne] = useState({});
    const [movieTwo, setMovieTwo] = useState({});
    const [movieThree, setMovieThree] = useState({});

    const onDropMovieOne = (e) => {
        const data = JSON.parse(e.dataTransfer.getData('text'));
        setMovieOne(data);
    };
    const onDropMovieTwo = (e) => {
        const data = JSON.parse(e.dataTransfer.getData('text'));
        setMovieTwo(data);
    };
    const onDropMovieThree = (e) => {
        const data = JSON.parse(e.dataTransfer.getData('text'));
        setMovieThree(data);
    };
    const allowDrop = (e) => {
        e.preventDefault();
    };

    return (
        <section className="movies" >
            <div className="drop" onDrop={onDropMovieOne} onDragOver={allowDrop} > <CardTop movie={movieOne}/> </div>
            <div className="drop" onDrop={onDropMovieTwo} onDragOver={allowDrop}> <CardTop movie={movieTwo}/> </div>
            <div className="drop" onDrop={onDropMovieThree} onDragOver={allowDrop}><CardTop movie={movieThree}/></div>
        </section>
    );
};
