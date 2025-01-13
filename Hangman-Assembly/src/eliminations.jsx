export default function Eliminations({ language }) {
    // function to change the color of javascript language
    function javascript() {
        return { backgroundColor: language.color, color: "black" }
    }
    // function to display the active languages
    function active() {
        return (
                        <div className='languages' style={ language.name === "Javascript" ? javascript() : { backgroundColor: language.color }} >
                <p className="eliminationLanguage">{language.name}</p>
            </div>
        );
    }

// function to display the eliminated languages
    function eliminated() {
        return (
            <div className='languages' style={{ backgroundColor: language.color }} >
                <div className="background-disabled">
                    <p className="skull">💀</p>
                </div>
                <div>
                    <p className="eliminationLanguage">{language.name}</p>
                </div>
            </div>
        );
    }

    return language.isEliminated === true ? eliminated() : active();
}  // end of Eliminations function