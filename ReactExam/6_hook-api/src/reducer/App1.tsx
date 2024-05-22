import * as React from 'react'

//타입은 Type Alias & Interface 사용
interface State {
    count : number;
}

type Action = {type : 'INCREMENT'} | {type : 'DECREMENT'};

function reducer(state:State, action:Action):State{
    switch(action.type){
        case 'INCREMENT':
            return { count : state.count + 1 }
        case 'DECREMENT':
            return { count : state.count - 1 }
        default:
            throw new Error();
    }
}

const App1 = () => {
    //const [count, setCount] = React.useState(0); //수정용
    const [state, dispatch] = React.useReducer(reducer, {count : 0})//state객체안에 count라는 변수 값. dispatch가 요청하면 reducer가 응답
    //count -> state -> dispatch -> reducer -> state

    const increment = () => dispatch({type : 'INCREMENT'}); //{type : 'increment'} action으로 넘어감. 여러가지 선택의 경우를 조건부로 선택할 수 있도록
    const decrement = () => dispatch({type : 'DECREMENT'});

    return (
        <div>
            <p>Count : {state.count}</p>
            <button onClick={increment}>증가</button>
            <button onClick={decrement}>감소</button>
        </div>
    )
}

export default App1;
