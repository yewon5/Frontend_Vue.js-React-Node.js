import * as React from 'react'

//입/출금 계산하는 프로그램

type Action = {type : "DEPOSIT", money : number} | {type : "WITHDRAW", money : number}

const accountReducer = (state:number, action:Action):number => {
    switch(action.type){
        case 'DEPOSIT':
            return state + action.money;
        case 'WITHDRAW':
            return state - action.money;
        default:
            return state;
    }
}

const App3:React.FC = () => {
    const [state, dispatch] = React.useReducer(accountReducer, 0) //잔액을 저장할 변수
    const [money, setMoney] = React.useState<number>(0); //입력된 금액을 받을 변수

    const onDeposit = () => {
        dispatch ({type : "DEPOSIT", money : money}) 
        //입력한 금액 money를 어떻게 받아올까? 값이 변했을때 change이벤트를 사용해서 money라는 변수에 저장
        //money(액션 객체의 속성 이름) : money(위에 컴포넌트의 상태로 관리되는 변수)
    }

    const onWithdraw  = () => {
        dispatch ({type : "WITHDRAW", money : money}) 
    }

    return (
        <div>
            <h1>금액을 입력하세요</h1>
            <input type="number" onChange={(e)=>setMoney(Number(e.target.value))} step={1000}></input> 
            {/* 매개변수(e)로 값을 받아옴. step={1000}으로 기본 단위 설정 */}
            <hr/>
            <h2>입금 또는 출금을 선택하세요</h2>
            <button onClick={onDeposit}>입금</button>
            <button onClick={onWithdraw}>출금</button>
            <h2>현재 잔액 : {state}</h2>
        </div>
    );
}

export default App3;