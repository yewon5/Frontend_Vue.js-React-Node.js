import * as React from 'react';

//5. 인터페이스 준비. id를 기본 key로 중복값을 방지.
interface Member {
    id : string; // 난수는 문자열로
    name : string;
    age : string;
    address : string;
}

//2.reducer()준비
const reducer = (state:any, action:any) => {
    return state;
}

const App5:React.FC = () => {
    //{count:0, member:[]} 1. count는 전체 회원 수, member는 회원 목록을 저장하는 배열
    const [state, dispatch] = React.useReducer(reducer, {count:0, member:[]}); 
    const [info, setInfo] = React.useState({}); //info는 입력받은 새로운 회원의 정보를 저장하는 상태 변수

    //3. 이벤트 핸들러 추가
    const addMember = () => {
        dispatch({type : "ADD", info : info})//info : info입력 받은 값 전달, member에 저장
    }

    //4. 이벤트 핸들러 추가 입력한 값 member:[]에 저장(DB역할)
    const onChangeHandler = () => {

    }

    return (
    <div>
        <div>
            <h1>전체 회원 수 : </h1>
            <div>
                이름 : <input type={'text'} name="name" autoComplete='off' onChange={onChangeHandler}/> {/* autoComplete='off' 자동완성해제 */}
            </div>
            <div>
                나이 : <input type={'number'} name="age" autoComplete='off'onChange={onChangeHandler}/>
            </div>
            <div>
                주소 : <input type={'text'} name="address" autoComplete='off'onChange={onChangeHandler}/>
            </div>
            <button onClick={addMember}>추가</button>
        </div>
        <table>
            <tr>
                <th>이름</th>
                <th>나이</th>
                <th>주소</th>
                <th>삭제</th>
            </tr>
        </table>
    </div>
    );
}


export default App5