import { Component } from "react";
import PropTypes from 'prop-types'
import './Scoreboard.css';

const FinalScoreboard = ({score, guessCount, resetFn}) => (
    <div className="scoreboard">
        <div>
            Your final score is <span className={`score ${score < 0 ? 'negative' : (score > 0 ? 'positive' : '')}`}>{score}</span>
            &nbsp;took you {guessCount} guesses !
        </div>
        <Reset onClick={resetFn}/>
    </div>
)

const Reset = ({onClick}) => (<div className="reset" onClick={_ => onClick()}><button>Reset</button></div>)

class Scoreboard extends Component {
    render() {
        const {score, guessCount, isFinal, resetFn} = this.props;
        return (isFinal ? <FinalScoreboard score={score} guessCount={guessCount} resetFn={resetFn}/> : <div className="scoreboard">
            <div>Guesses : {guessCount}</div> 
            <div>Score : <span className={`score ${score < 0 ? 'negative' : (score > 0 ? 'positive' : '')}`}>{score}</span></div>
            <Reset onClick={resetFn}/>
        </div>)
    }
}

Scoreboard.propType = {
    score: PropTypes.number.isRequired,
    guessCount: PropTypes.number.isRequired,
    isFinal: PropTypes.bool.isRequired,
    resetFn: PropTypes.func.isRequired
}

export default Scoreboard;