import { Component } from "react";
import Letter from "./Letter";
import PropTypes from 'prop-types'
import "./Keyboard.css";

const MAJ_ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

class Keyboard extends Component {
    isLetterGuessed(letter) {
        return this.props.guessedLetters.has(letter);
    }

    render() {
        const letters = [...MAJ_ALPHABET];
        return (<div className="keyboard">
            {letters.map((letter, index) => 
                <Letter key={letter + index}
                    letter={letter}
                    guessed={this.isLetterGuessed(letter)}
                    onClick={_ => this.props.onClickLetterFn(letter)}/>)}
        </div>)
    }
}

Keyboard.propTypes = {
    guessedLetters: PropTypes.instanceOf(Set).isRequired,
    onClickLetterFn: PropTypes.func.isRequired
}

export default Keyboard;