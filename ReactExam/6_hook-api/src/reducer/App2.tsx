import * as React from 'react';

//햄버거 주문 프로그램

type Action = {type : 'HAMBURGER'} | {type : 'POTATO'} | {type : 'COKE'};

const priceReducer  = (price:number, action:Action):number => {
    switch(action.type){
        case 'HAMBURGER': //상수는 대문자로 적는 것이 관례
            return 4000;
        case 'POTATO':
            return 2000;
        case 'COKE':
            return 1000;
        default:
            return price;
    }
}

const App2:React.FC = () => { //:React.FC 표시로 함수형 컴포넌트라는 것을 명확히 함
    const[price, priceDispatcher] = React.useReducer(priceReducer, 0);

    const onHamburger = () => {priceDispatcher({type : 'HAMBURGER'})} //타입을 priceReducer함수의 action에 전달
    const onPotato = () => {priceDispatcher({type : 'POTATO'})}
    const onCoke = () => {priceDispatcher({type : 'COKE'})}

    return (
        <div>
            <h1>햄버거 가게</h1>
            <h3>지불할 금액 : {price}</h3>
            <hr/>
            <button onClick={onHamburger}>햄버거 (4000원)</button>
            <button onClick={onPotato}>감자튀김 (2000원)</button>
            <button onClick={onCoke}>콜라 (1000원)</button>
        </div>
    )
}

export default App2;