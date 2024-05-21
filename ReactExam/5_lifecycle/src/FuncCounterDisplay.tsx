import * as React from 'react';

interface CounterDisplayProps {
    // counter={counter} 부모에서 counter라는 이름으로 전달하고 있음
    counter : number;
}

function FuncCounterDisplay(props:CounterDisplayProps):React.ReactElement { //import 모두 접근가능하게 * as React 했기때문에 React.로 접근한다.
    React.useEffect(()=>{
        console.log("[Rendered] CounterDisplay / useEffect") //의존성 주입 X 렌더링할때마다 실행
    })
    React.useEffect(()=>{
        console.log("[Mounted] CounterDisplay / useEffect") //의존성 주입 O 변경데이터가 없어서 최초 1회만 실행
    }, [])
    
    return (
        <h3>CounterDisplay : {props.counter}</h3>
    );
}

export default FuncCounterDisplay;