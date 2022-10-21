import Atropos from 'atropos/react';

import 'atropos/css';

import './styles.css';
export const CardTop = ({ movie }) => {
    const { title, backdrop, date } = movie;
    console.log(backdrop);
    return (
        <article className="top-card" >
            <Atropos
                activeOffset={40}
                shadowScale={1.05}
            >

                <img className="top-img" src={`https://www.themoviedb.org/t/p/w220_and_h330_face/${backdrop}`} draggable="false" data-atropos-offset="0" />
                <div className="top-info">
                    <p className="top-info-title"data-atropos-offset="1.5" >{title}</p>
                    <p className="top-info-date" data-atropos-offset="10" >{date}</p>
                </div>

            </Atropos>
        </article>
    );
};
