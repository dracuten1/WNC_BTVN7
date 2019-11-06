import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import Board from '../../components/game-board/board';
import SquareContext from '../../contexts/square-context';
import HistoryBoard from '../../components/history-board/history-board';
import * as actionCreators from '../../store/actions/socketReturnActions';

import './GameCaro.css';

class GameCaro extends Component {
    constructor(props) {
        super(props);
        this.state = {
            arrangeAsend: true,
        }
    }

    init = () => {

    }
    componentDidMount() {
        this.props.connect();
    }
    handleClick = (square) => {
        if (this.props.turn)
            this.props.selectedSquare(square);
    }

    backToStep = (step) => {

        this.props.setStep(step);
    }
    render = () => {
        const { arrangeAsend } = this.state;
        const { boardSquares, player, win, history, currentStep } = this.props;
        let authRedirect = null;
        if (!this.props.isAuthenticated) {
            console.log(this.props);
            authRedirect = <Redirect to={'/'} />
        }
        return (
            <div className="game">
                {authRedirect}
                {win ? <div>
                    <h1>Congratulation Player {player === 1 ? 'O' : 'X'}</h1>
                </div>
                    : null
                }
                <div>
                    <div className="board">
                        <h1>{player === 1 ? 'X' : 'O'}</h1>
                        <button type="button" onClick={this.init}>Play again</button>
                    </div>

                    <SquareContext.Provider value={
                        {
                            value: 1,
                            onSquareClick: (square) => this.handleClick(square)
                        }
                    }>
                        <Board squares={boardSquares}
                            win={win}
                        />
                    </SquareContext.Provider>
                </div>
                <ol>
                    <li>
                        <button type="button" onClick={() => this.setState({ arrangeAsend: true })}> Ascending </button>
                        <button type="button" onClick={() => this.setState({ arrangeAsend: false })}> Descending </button>
                    </li>
                    {
                        win === false ?
                            <ol>
                                <HistoryBoard current={currentStep} step={history.length} arrange={arrangeAsend} backToStep={(step) => this.backToStep(step)} />
                            </ol> : null
                    }
                </ol>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        turn: state.onl.turn,
        boardSquares: state.onl.boardSquares,
        player: state.onl.player,
        win: state.onl.win,
        history: state.onl.history,
        isAuthenticated: state.auth.isAuthenticated,
    }
};

const mapDispatchToProps = dispatch => {
    return {
        connect: () => dispatch(actionCreators.connectServer()),
        initGameRefactor: () => dispatch(actionCreators.initGame()),
        selectedSquare: (square) => dispatch(actionCreators.sqaureSelected(square)),
        setStep: (step) => dispatch(actionCreators.setStep(step)),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(GameCaro);