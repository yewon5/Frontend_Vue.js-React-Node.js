import React, {ReactElement, useEffect, useState} from 'react';
import FuncCounterDisplay from './FuncCounterDisplay';
import { useCounter } from './hooks/useCounter'; //export할때 default가 아니기때문에 {}로
import useToggle from './hooks/useToggle'; //export할때 default라서 중괄호 없이
import useWindowWidth from './hooks/useWindowWidth';

interface CounterProps {
    title: string;
    num: number;
}

interface CounterState {
    num: number;
    hideCount : boolean
}

//function FuncCounter (props:CounterProps):ReactElement{ //옛날 방식
//const FuncCounter = (props:CounterProps) => { //화살표함수
const FuncCounter:React.FC<CounterProps> = (props) => { //화살표함수+타입스크립트
    //js는 함수도 매개변수처럼 주고 받을 수 있음
    const {count, plus, minus} = useCounter(); //useCounter.tsx에서 {}로 반환했기때문에
    const [hideCount, toggle] = useToggle(); //useToggle.tsx에서 []로 반환했기때문에
    const {width, cleanup} = useWindowWidth();

    return( //함수형 컴포넌트는 return, 클래스형 컴포넌트는 render
        <div>         
            <h1>{props.title} {props.num} / {width}</h1> 
            <h3>Counter : {count}</h3> 
            {!hideCount && <FuncCounterDisplay counter={count}></FuncCounterDisplay>} 
            <button onClick={plus}>Plus</button>
            <button onClick={minus}>Plus</button>
            <button onClick={toggle}>Toggle Counter</button>
            <button onClick={cleanup}>clean</button>
        </div>
    )
}

export default FuncCounter;