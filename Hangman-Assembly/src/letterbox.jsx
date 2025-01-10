import PropTypes from 'prop-types';



export default function Letterbox({ letter, isClicked, changeClick, id, word, wrongClick }) {
    const styleCorrect = { backgroundColor: "green"};
    const styleWrong = { backgroundColor: "red" };

    const boxStyle = () => {
        if (isClicked) {
            if (word.includes(letter)) {
                
                return styleCorrect;
            } else {
                return styleWrong;
            }
        }
        return {};
    };
    return (
        <div className="box" onClick={() => { if (word.includes(letter)) { changeClick(id) }  else { wrongClick(id) } } }>
            <p className="letter" style={boxStyle()}>{letter}</p>
        </div>
    );
    
    
}

Letterbox.propTypes = {
    letter: PropTypes.string.isRequired,
    isClicked: PropTypes.bool.isRequired,
    changeClick: PropTypes.func.isRequired,
    id: PropTypes.string.isRequired,
    word: PropTypes.string,
    wrongClick: PropTypes.func
}