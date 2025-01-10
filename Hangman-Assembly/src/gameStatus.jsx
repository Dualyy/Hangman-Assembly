import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';

export default function GameStatus({ guesses, subsetCorrect, uniqueLetterArray }) {
    const [gameOver, setGameOver] = useState(false);
    const [gameWon, setGameWon] = useState(false);

    useEffect(() => {
        checkGameStatus();
    }, [guesses, subsetCorrect]);

    const arrayTest = subsetCorrect.map(letter => letter.letter.toLowerCase());
    const uniqueLetterSet = new Set(uniqueLetterArray);
    const subsetCorrectSet = new Set(arrayTest);

    const checkGameStatus = () => {
        if ([...uniqueLetterSet].every(letter => subsetCorrectSet.has(letter)) && uniqueLetterSet.size === subsetCorrectSet.size) {
            setGameWon(true);
            setGameOver(true);
        } else if (guesses === 9) {
            setGameOver(true);
        }
    };


    const winningElement = () => (
        <div style={{ backgroundColor: "green" }}>
            <h2 className="win">You win!🎉</h2>
            <p>Well done!</p>
        </div>
    );

    const failedElement = () => (
        <div style={{ backgroundColor: "red" }}>
            <h2 className="loss">You lost!💀</h2>
            <p>Time to learn Assembly</p>
        </div>
    );

    return (
        <div>
            {gameOver ? (gameWon ? winningElement() : failedElement()) : null}
        </div>
    );
}

GameStatus.propTypes = {
    guesses: PropTypes.number.isRequired,
    subsetCorrect: PropTypes.array.isRequired,
    word: PropTypes.string.isRequired,
    uniqueLetterArray: PropTypes.array.isRequired,
};