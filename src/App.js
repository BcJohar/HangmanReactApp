import './App.css';
import { Component } from 'react';
import Keyboard from './Keyboard';
import Scoreboard from './Scoreboard';

const THE_WORD = 'THEFOOL', MASK_SYMBOL = '_';
const UP_SCORE = 2, DOWN_SCORE = -1;
const DEFAULT_STATE = {
  guessedLetters : new Set(),
  guessCount: 0,
  score: 0,
  word: [...THE_WORD].map(letter => MASK_SYMBOL).join('')
};

class App extends Component {
  state = DEFAULT_STATE;

  // Arrow fx to get this bind
  checkClickedLetter = letter => {
    const {word, guessedLetters, guessCount, score} = this.state;
    const newGuessCount = word === THE_WORD ? guessCount : guessCount + 1;
    let newScore = score;
    if ([...THE_WORD].includes(letter)) {
      if (word !== THE_WORD) newScore += UP_SCORE;
      guessedLetters.add(letter);
    } else {
      if (word !== THE_WORD) newScore += DOWN_SCORE;
    }
    this.setState({
      guessedLetters: guessedLetters,
      guessCount: newGuessCount,
      score: newScore,
      word: [...THE_WORD].map(letter => guessedLetters.has(letter) ? letter : MASK_SYMBOL).join('')
    });

  }

  // Arrow Fx only for binding issues
  resetGame = _ => {
    this.setState(DEFAULT_STATE);
  }

  render() {
    const {word, guessedLetters, guessCount, score} = this.state;
    return (<div className="playground">
      <Scoreboard score={score} guessCount={guessCount} isFinal={word === THE_WORD} resetFn={this.resetGame}/>
      <div className="word">{word}</div>
      <Keyboard guessedLetters={guessedLetters} onClickLetterFn={this.checkClickedLetter}/>
    </div>)
  }
}

export default App;
