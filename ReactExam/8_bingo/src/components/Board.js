import React, {useState} from 'react';
import Square from './Square';
import './Board.css'

 const Board = () => { 
    const [squares, setSquares] = useState(Array(9).fill(null))
    const [xIsNext, setXIsNext] = useState(true); //Next Player 표시

    const calculateWinner = (squ) => {
        const lines = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8],
            [0, 3, 6], [1, 4, 7], [2, 5, 8],
            [0, 4, 8], [2, 4, 6]
        ];

        for(let index=0; index<lines.length; index++){
            const [a, b, c] = lines[index];

            if(squ[a] === squ[b] && squ[a] === squ[c]){
                return squ[a];
            } 
        }
    }

    //우승자 확인
    const winner = calculateWinner(squares);

    let status;
    if(winner){
        status = 'Winner : ' + winner;
    }
    else{
        status = `Next Player : ${xIsNext ? 'X' : 'O'}`;
    }

    //이미 클릭된 칸은 다시 클릭되지 않도록


    //게임 끝났을때 더이상 클릭되지 않도록


    const handleClick = (i) => {
        const newSquares = squares.slice(); 
        newSquares[i] = xIsNext ? 'X' : 'O'; 
        setSquares(newSquares);
        setXIsNext(!xIsNext)
    }
    
    const renderSquare = (i) => { 
        return <Square value={squares[i]} onClick={()=>{handleClick(i)}} />
    }

    return (
        <div>
            <div className='status'>{status}</div>
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