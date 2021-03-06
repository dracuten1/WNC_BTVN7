import React from 'react';
import Square from '../game-square/square';
import './board.css';


class Board extends React.Component {

    renderSquare = (square) => {
        return <Square
            isSelected={square.isSelected}
            squareObj={square}
            value={square.value} key={square.key}
        />;
    }

    renderRow = (squareRow) => {
        return (
            <div className='board-row' key={`row${squareRow[0].key}`}>
                <div>
                    {squareRow.map(square => this.renderSquare(square))}
                </div>
                <br />
            </div>
        )
    }

    render() {
        const { squares } = this.props;
        return (
            <div>
                <div>
                    {squares.map(squareRow => this.renderRow(squareRow))}
                </div>
            </div>
        );
    }
}
export default Board;