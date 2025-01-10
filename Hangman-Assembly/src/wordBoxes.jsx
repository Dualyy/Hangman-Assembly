import PropTypes from 'prop-types';
export default function WordBoxes({ wordLetter, clickedKeyboards, guesses }) {

    const guessed = { color: "white" }
    const notGuessed = { color: "#323232" }

    let gameover = false

    if (guesses === 9) {
        gameover = true;
    }

    const boxStyle = () => {
        return clickedKeyboards.includes(wordLetter) || gameover ? guessed : notGuessed
    };

    return (
        <>
            <p className="wordLetter" style={boxStyle()}>{wordLetter}</p>
        </>
        )
    
}

WordBoxes.propTypes = {
    wordLetter: PropTypes.string,
    clickedKeyboards: PropTypes.array,
    guesses: PropTypes.number
}