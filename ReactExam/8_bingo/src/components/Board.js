import React from 'react';
import Square from './Square';
import './Board.css'

//props를 전달받을때는 중괄호로 묶어준다
 const Board = ({squares, onClick}) => { 
    const renderSquare = (i) => { 
        return <Square value={squares[i]} onClick={()=>{onClick(i)}} />
    }

    return (
        <div className='board-wrapper'>
            <div>
                {renderSquare(0)}
                {renderSquare(1)}
                {renderSquare(2)}
            </div>
            <div>
                {renderSquare(3)}
                {renderSquare(4)}
                {renderSquare(5)}
            </div>
            <div>
                {renderSquare(6)}
                {renderSquare(7)}
                {renderSquare(8)}
            </div>
        </div>
    )
}

export default Board