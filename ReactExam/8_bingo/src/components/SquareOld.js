import React, {Component} from 'react';
import './Square.css'

export default class Square extends Component{ //{Component}를 import하지 않았으면 React.Component로 상속
    /*
    constructor(props){ //생성자의 인자로 props를 정의하는 이유는 초기화 목적. 정의하지 않으면 생성자 내부에서 props에 접근할 수 없음
        super(props);
        this.state = {value : null} //value라는 state속성에 저장
        console.log(this.props) 
    }
    */
    
    //부모에게 데이터를 전달 받고 출력
    render(){
        return (
            <button className='square' 
                onClick={()=>this.props.onClick()}> 
                {/* onClick이벤트가 발생했다는 것을 부모한테 전달 */}
                {this.props.value} {/* state 클릭한 칸만 X 표시, props 인덱스 번호 */}
            </button>
        )
    }
}