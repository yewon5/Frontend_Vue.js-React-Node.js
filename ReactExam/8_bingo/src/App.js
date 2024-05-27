import './App.css';
import Board from './components/Board';
import { useState } from 'react';

function App() {
  //되돌리기(history)기능 만들기
  const [history, setHistory] = useState([{squares : Array(9).fill(null)}]) //계속 복사본을 만들어서 저장할꺼기때문에 배열로 묶어준다. squares라는 키값 지정
  const [xIsNext, setXIsNext] = useState(true); //X를 놓을 위치
  const [stepNumber, setStepNumber] = useState(0) //jumpTo() 몇번째 버튼을 클릭했는지 저장하는 변수

  const calculateWinner = (squares) => {
    const lines = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8],
      [0, 3, 6], [1, 4, 7], [2, 5, 8],
      [0, 4, 8], [2, 4, 6]
    ];

    for(let index=0; index<lines.length; index++){
      const [a, b, c] = lines[index];

      //null값을 반드시 먼저 비교해야 한다. squ[a]가 빈 칸이 아닌지도 확인
      if(squares[a] && squares[a] === squares[b] && squares[a] === squares[c]){
        return squares[a]; // 승자가 있다면 승자의 표시 ('X' 또는 'O')를 반환
      } 
    }
  }
  //우승자 확인
  const current = history[stepNumber] //가장 최근의 게임판을 불러옴
  const winner = calculateWinner(current.squares); //현재위치의 스퀘어즈

  let status;
  if(winner){
    status = 'Winner : ' + winner;
  }
  else{
    status = `Next Player : ${xIsNext ? 'X' : 'O'}`;
  }

  const handleClick = (i) => {
    const newHistory = history.slice(0, stepNumber + 1);
    const newCurrent = newHistory[newHistory.length -1]; //새로복사온 히스토리는 마지막 위치가 커런트가 돼야함
    const newSquares = newCurrent.squares.slice(); //slice()원본 복사

    //이미 클릭된 칸은 다시 클릭되지 않고, 게임 끝났을때 더이상 클릭되지 않도록
    //클릭학 위치[i]를 가지고 왔는데 [i]를 또 클릭할 경우 중지
    if(calculateWinner(newSquares) || newSquares[i]){
      return;
    }

    newSquares[i] = xIsNext ? 'X' : 'O';  // 다음 턴의 플레이어 설정
    setHistory([...newHistory, {squares : newSquares}]); //히스토리를 복사해서, 새로운 게임판을 squares에 저장
    setXIsNext(prev=>!prev)  // 턴을 교체

    setStepNumber(newHistory.length);
  }

  const moves = history.map((step, move)=>{ 
    const dese = move ? 'Go to move #'+ move : 'Go to game start';

    //되돌아가기 기능. step이 현재 current가 돼야함
    const jumpTo = (step) => {
      setStepNumber(step); //setStepNumber 현재 선택한 버튼의 정보
      setXIsNext((step % 2) === 0) //항상 짝수에 위치하게
    }

    return(
      //key값은 반복돌고 있는 자식에게 중복되지 않은 고유한 값으로설정한다. step은 인덱스 값이 바뀔수 있으므로 권장하지 않는다
      <li key={move}> 
        <button className="move-button" onClick={()=>jumpTo(move)}>{dese}</button>
      </li>
    )
  });


  return (
    <div className="game">
      <div className="game-board">
        <Board squares={current.squares} onClick={(i) => handleClick(i)}/>
      </div>
      <div className="game-info">
        <div>{status}</div>
        <ol>
          {moves}
        </ol>
      </div> 
    </div>
  );
}
//자식이 클릭하면 부모의 핸들클릭이 호출되도록, squares, onClick props를 board 컴포넌트에 전달

export default App;
