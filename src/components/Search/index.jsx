import { useState } from 'react';
import './styles.css';

export const Search = ({ onSearch }) => {
    const [inputState, setInputState] = useState('');

    const handleChange = ({ target }) => {
        setInputState(target.value);
    };

    return (
        <form onSubmit={(e) => {
            e.preventDefault();
            onSearch(inputState);
            setInputState('');
        }} className="form" action="">
            <input
                className="form-input"
                type="text"
                placeholder='Search Movie'
                onChange={handleChange}
                value={inputState}
            />

        </form>
    );
};
