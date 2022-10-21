import './styles.css';

export const CardMovie = ({ movie }) => {
    const onDragStart = (e) => {
        e.dataTransfer.setData('text', JSON.stringify({ id: movie.id, title: movie.title, backdrop: movie.backdrop, date: movie.date }));
    };
    const onDragEnd = (e) => {
        console.log('solte');
    };
    return (
        <article
            className="card"
            draggable
            onDragStart={onDragStart}
            onDragEnd={onDragEnd}
        >
            <img className="card-img" draggable="false" src={`https://www.themoviedb.org/t/p/w220_and_h330_face/${movie.poster}`} alt="" />
            <div className="card-info">
                <p className="card-title">{movie.title}</p>
                <p className="card-date">{movie.date}</p>
            </div>
        </article>
    );
};
