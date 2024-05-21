import * as React from 'react';
import CounterDisplay from './CounterDisplay';

//index.tsx에서 render()에 데이터를 준비하고, 데이터 전달 받을 수 있게 인터페이스 준비
//<CounterProps> Counter 컴포넌트가 받을 props의 타입 지정<CounterProps>
interface CounterProps {
    title: string;
    num: number;
}

//state는 생성자안에서 초기화 this.state = {num:0}
interface CounterState {
    num: number;
    hideCount : boolean
}

class Counter extends React.Component<CounterProps, CounterState>{ 
    //컴포넌트의 역할을 갖기 위해 React.Component를 상속을 받아야 함
    //제너릭 <>는 클래스형 컴포넌트 Counter가 CounterProps 인터페이스를 사용하여 props의 타입을 정의
    constructor(props:CounterProps){ //생성자 준비
        super(props); //super() 반드시 부모 클래스의 생성자를 호출해줘야 함, 생성자에 인자(props)가 있어야 함 (이름은 내맘) 그리고 부모에게 다시 전달
        this.state = {num:0, hideCount:false} //state는 하나의 값을 저장하는 변수가 아닌 객체임

        console.log("[Mounting] Counter : In constructor") //Mounting 단계에서는 가상 DOM과 실제 DOM이 연결되는 작업
    }

    //버튼 클릭시 카운터 증가
    handleClick = () => {
        console.log("현재 카운터 값 : ", this.state.num)
        this.setState((prev)=>{ //setState 변수값을 매개변수(prev)에 전달, setState() 메서드는 React.Component 클래스에 내장되어 있다
            return {num:prev.num + 1}
        }); 
    }

    toggleClick = () => {
        this.setState((prev)=>{
            return {hideCount: !prev.hideCount}
        })
    }

    render(){ //함수형 컴포넌트에서는 return을 사용해서 렌더링했다면, 클래스형 컴포넌트에서는 render() 메서드를 사용
        //console.log("Mounting & Updating : In render")
        return (
            <div>
                
                <h1>{this.props.title}, {this.props.num}</h1> {/* props 값 변경 불가능 */}
                <h3>Counter : {this.state.num}</h3> {/* state는 값 변경 가능 */}
                {!this.state.hideCount && <CounterDisplay counter={this.state.num}></CounterDisplay>} {/* &&연산자를 사용 */}
                <button onClick={this.handleClick}>Plus</button>
                <button onClick={this.toggleClick}>Toggle Counter</button>
                {/* 라이프 사이클 componentWillUnmount를 확인하기 위해
                CounterDisplay.tsx 자식 컴포넌트를 만들고
                Toggle버튼을 이용하여 Counter Unmount 시키기 */}
            </div>
        );
    }

    //렌더링이 끝난다음에 화면이 다 보여지고 나서 호출됨
    //화면에 있는 특정 객체의 위치를 파악할 때, 마운트된 후에 외부 데이터를 가져와야 하는 경우
    componentDidMount(): void {
        console.log("[Mounting] Counter : In componentDidMount")
    }

    //카운터 버튼을 누르면 호출됨
    componentDidUpdate(): void {
        console.log("[Updating] Counter : In componentDidUpdate")
    }
}

export default Counter;