import { Component } from "react";
import PropTypes from 'prop-types'
import "./Letter.css";

class Letter extends Component {
    render() {
        const {letter, guessed, onClick} = this.props;
        return (<button className="letter" disabled={guessed} onClick={onClick}>{letter}</button>)
    }
}

Letter.proptTypes = {
    letter: PropTypes.string.isRequired,
    guessed: PropTypes.bool.isRequired,
    onClick: PropTypes.func.isRequired
}

export default Letter;