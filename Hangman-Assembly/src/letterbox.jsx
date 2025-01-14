import PropTypes from 'prop-types';


// Letterbox component is a functional component that takes in the following props:
export default function Letterbox({ letter, isClicked, changeClick, id, word, wrongClick }) {
    const styleCorrect = { backgroundColor: "green"};
    const styleWrong = { backgroundColor: "red" };
    // boxStyle function is used to change the color of the letter box based on the user's input and wether it is right or wrong.
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
// PropTypes is a library that helps in validating the props passed to a component. It also helps in documenting the intended types of properties passed to components.
Letterbox.propTypes = {
    letter: PropTypes.string.isRequired,
    isClicked: PropTypes.bool.isRequired,
    changeClick: PropTypes.func.isRequired,
    id: PropTypes.string.isRequired,
    word: PropTypes.string,
    wrongClick: PropTypes.func
}