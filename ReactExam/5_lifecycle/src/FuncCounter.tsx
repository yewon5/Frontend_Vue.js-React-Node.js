import React, {ReactElement, useEffect, useState} from 'react';
//import CounterDisplay from './CounterDisplay';
import FuncCounterDisplay from './FuncCounterDisplay';

interface CounterProps {
    title: string;
    num: number;
}

interface CounterState {
    num: number;
    hideCount : boolean
}

function FuncCounter (props:CounterProps):ReactElement{ //return안의 태그가 JSX 리액트 태그이기때문에 타입은 :ReactElement
    const[counter, setCounter] = useState(0) //import 안 하고 React.useState이렇게 써도 되고
    const[hideCount, setHideCount] = useState(false);

    const plus = ()=>{ setCounter((prev)=>{return prev + 1}) }
    const minus = ()=>{ setCounter((prev)=>{return prev - 1}) }
    const toggle = ()=>{ setHideCount(!hideCount) }

    useEffect(()=>{
        console.log("[Rendered] Counter / useEffect") //의존성 주입 X 렌더링할때마다 실행
    })
    useEffect(()=>{
        console.log("[Mounted] Counter / useEffect") //의존성 주입 O 변경데이터가 없어서 최초 1회만 실행
    }, [])
    
    return( //함수형 컴포넌트는 return, 클래스형 컴포넌트는 render
        <div>         
            <h1>{props.title}, {props.num}</h1> 
            <h3>Counter : {counter}</h3> 
            {!hideCount && <FuncCounterDisplay counter={counter}></FuncCounterDisplay>} 
            <button onClick={plus}>Plus</button>
            <button onClick={minus}>Plus</button>
            <button onClick={toggle}>Toggle Counter</button>
        </div>
    )
}

export default FuncCounter;