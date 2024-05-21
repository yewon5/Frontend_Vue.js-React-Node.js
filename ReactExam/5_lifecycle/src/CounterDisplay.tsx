import * as React from 'react';

interface CounterDisplayProps {
    // counter={this.state.num} 부모에서 counter라는 이름으로 전달하고 있음
    counter : number;
}

class CounterDisplay extends React.Component<CounterDisplayProps>{ //<>제너릭은 함수나 클래스를 정의할 때 타입을 파라미터로 전달
    constructor(props:CounterDisplayProps){ //인터페이스를 통해 props의 타입을 지정
        super(props);
    }
    render(){
        return <h3>CounterDisplay : {this.props.counter}</h3>
    }

    componentDidMount(): void {
        console.log("[Mounting] CounterDisplay : In componentDidMount")
    }
    componentDidUpdate(): void {
        console.log("[Updating] CounterDisplay : In componentDidUpdate")
    }
    componentWillUnmount(): void {
        console.log("[UnMounting] CounterDisplay : In componentWillUnmount")
    }
}

export default CounterDisplay;