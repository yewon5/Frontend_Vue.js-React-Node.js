import * as React from 'react';

// Action 타입 정의
interface Action {
    type: string;
    selected : string;
}

const reducer = (state:string, action:Action) => {
    switch (action.type) {
        case 'SELECT':
            return action.selected; // 선택된 값으로 상태 업데이트
        default:
            return state;
    }
}

const App6:React.FC = () => {
    const [selected, dispatch] = React.useReducer(reducer, '')


    const onChangeHandler = (e: React.ChangeEvent<HTMLSelectElement>) => { //select 요소의 값이 변경될 때 발생하는 이벤트에 대한 정보를 포함
        dispatch ({type : "SELECT", selected : e.target.value})
    }

    const onCheckHandler = () => {
        alert("선택한 지역: " + selected);
    }

    return (
        <div>
            <h4>선택한 value를 출력</h4>
            <select onChange={onChangeHandler}>
                <option value="서울">서울</option>
                <option value="경기">경기</option>
                <option value="제주">제주</option>
                <option value="경주">경주</option>
            </select>
            <button onClick={onCheckHandler}>확인</button>
        </div>
    )
}

export default App6