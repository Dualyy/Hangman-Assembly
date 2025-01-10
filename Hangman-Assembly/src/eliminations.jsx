export default function Eliminations({ language }) {
    
    function javascript() {
        return { backgroundColor: language.color, color: "black" }
    }

    function active() {
        return (
                        <div className='languages' style={ language.name === "Javascript" ? javascript() : { backgroundColor: language.color }} >
                <p className="eliminationLanguage">{language.name}</p>
            </div>
        );
    }


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
}