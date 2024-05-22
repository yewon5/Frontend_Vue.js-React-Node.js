import * as React from 'react'

const App3:React.FC = () => {
    return (
        <div>
            <h1>금액을 입력하세요</h1>
            <input type="number"></input>
            <hr/>
            <h2>입금 또는 출금을 선택하세요</h2>
            <button>입금</button>
            <button>출금</button>
            <h2>현재 잔액 : </h2>
        </div>
    );
}

export default App3;