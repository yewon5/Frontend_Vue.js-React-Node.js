import React, {Component} from 'react';
import Square from './Square';
import './Board.css'


export default class Board extends Component{ //{Component}를 import하지 않았으면 React.Component로 상속
    constructor(props){
        super(props);
        this.state = { squares : Array(9).fill(null)} // 자식이 보낸 X,O 값을 저장할 9개 임시 공간
    }

    handleClick = (i) => {
        const squares = this.state.squares.slice(); //9개 공간을 잘라서 가져옴
        squares[i] = 'X' //부모가 i위치에 저장해놓음
        this.setState({squares : squares})
        //처음 네모칸은 null값 클릭하면 부모의 handleClick호출 복사본을 만들어서 해당 i값에 x를 저장
    }
    
    renderSquare(i){ //몇번째 버튼이 눌렸는지 확인하기 위해 i(index) 받기
        return <Square value={this.state.squares[i]} onClick={()=>{this.handleClick(i)}} /> 
        //태그 안에 속성으로 자식에게 데이터 전달
        //부모가 갖고 있는 9개의 공간과 자식이 갖고 있는 인덱스와 매핑
        //클릭 이벤트는 자식한테 발생함. 실제 클릭 이벤트가 아님. 자식이 클릭됐으면 부모가 처리하는 handleClick() 핸들러 만듦
    }

    render(){
        return (
            <div className=''>
                <div className='status'>Next Player : X , O</div>
                <div>
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                </div>==
                <div>
                    {this.renderSquare(3)}
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                </div>
                <div>
                    {this.renderSquare(6)}
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                </div>
            </div>
        )
    }
}