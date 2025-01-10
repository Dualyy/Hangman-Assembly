import { useState, useEffect } from 'react'
import './App.css'
import Letterbox from './letterbox';
import { dictionary,  getRandomNumber, languages } from './dictionary';
import GameInfo from './gameInfo';
import WordBoxes from './wordBoxes';
import { nanoid } from 'nanoid'
import GameStatus from './gameStatus';
import Eliminations from './eliminations';


function App() {
  //init alphabet for setting up keyboard after
  const ohGod = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split('')
  let clickedArray = [];
  //state variables
  // eslint-disable-next-line no-unused-vars
  const [word, setWord] = useState(dictionary[getRandomNumber()])
  const [keyboardValues, setKeyboardValues] = useState(ohGod.map((letter) => { return { letter: letter, isClicked: false, isWrong:false, id: nanoid() }; }))
  let subset = keyboardValues.filter(letter => letter.isWrong === true)
  let subsetCorrect = keyboardValues.filter(letter => (letter.isWrong === false && letter.isClicked === true))

  const [data, setData] = useState({
    languages: languages
  });
  const keyboard = Object.values(keyboardValues)
  let letterArray = word.split('');
  let uniqueLetterArray = letterArray.filter((item, index) => letterArray.indexOf(item) === index);


  useEffect(() => {

    if (subset.length < 9 && subset.length > 0) {
      eliminator(data.languages[subset.length -1])
    }
   }, [keyboardValues])
  
  
  function clickHandler(id) {
    setKeyboardValues(prevValues => prevValues.map(item => {
      if (item.id === id) {
        return { ...item, isClicked: true };
      }
      return item;
    }));
  }

  function clickHandlerWrong(id) {
    setKeyboardValues(prevValues => prevValues.map(item => {
      if (item.id === id) {
        return { ...item, isClicked:true, isWrong: true };
      }
      return item;
    }));
  }

  function eliminator(language) {
    setData((prevData) => ({
        languages: prevData.languages.map((item) => {
            if (item.name === language.name) {
                console.log(item.name + " eliminated");
                return { ...item, isEliminated: true };
            } else {
                return item;
            }
        })
    }));
}
  
  function areClicked() {
    keyboardValues.map((item) => {
      if (item.isClicked === true) {
        return clickedArray.push(item.letter)
      }
    })
  }
  areClicked()


    return (
      <div className="gameWindow">
        <GameInfo  key={nanoid()}/>
        <GameStatus guesses={subset.length} subsetCorrect={subsetCorrect} uniqueLetterArray={uniqueLetterArray} word={word} key={nanoid()} />
        <div className="Languages">

        </div>
        <div className='letterboxes-container'>
          {letterArray.map((wordLetter) => { return (<WordBoxes key={nanoid()} wordLetter={wordLetter.toUpperCase()} clickedKeyboards={clickedArray} guesses={subset.length} />) })}
        </div>

        <div className="eliminations">
          {data.languages.map((language) => {
            return (<>
              <Eliminations key={nanoid()} language={language} />
            </>)
          })}
        </div>

        <div className='letterKeyboard'>
          {keyboard.map((item) => <Letterbox key={item.id} letter={item.letter.toUpperCase()} isClicked={item.isClicked} changeClick={clickHandler} wrongClick={clickHandlerWrong}  id={item.id} word={word.toUpperCase()}/>)}
        </div>
      </div>
    )
  }

export default App
