/* eslint-disable */
import logo from './logo.svg';
import './mystyle.css';
import './App.css';
import {useState} from "react";

function App() {
  //import {useState} from "react"; // 변수대신 state 함수 사용
  // let posts = "첫번째 블로그 글입니다.";

  //Destructuring a에 첫번째 값, b에 두번째 값 자동으로 할당
  //const [a, b] = [10, 100];

  let [title, setTitle] = useState(["첫번째 블로그 글입니다.", "남자 코트 추천", "역삼 맛집"])
  // useState()는 배열로 2개 값을 반환.
  // [title, setTitle] [title은 현재 상태 값을 나타내고, setTitle은 상태 값을 변경할 때 사용하는 함수]
  // title = "두번째 블로그 글입니다."; 이렇게 수정하면 안되고 함수안에서 setTitle()로 수정해야함

  let [good, setGood] = useState(0);

  return (
    //이 공간은 html이 아니고 JavaScript의 확장 문법 JSX를 사용하기때문에 className을 사용한다.
    //React가 UI를 렌더링할 때, Real DOM이 아닌 Virtual DOM에서 수행
    <div className="App">
      <div className="black-nav" style={{color:"white", fontSize: '30px'}}>
        <div>블로그 개발중</div>
      </div>
      
      <button onClick={()=>{
          //setTitle(["첫번째 블로그 글입니다.", "여자 코트 추천", "역삼 맛집"]) // 기존의 데이터를 변경하는 것이라 권장하지 않는다. 
          //let title_copy = title; //데이터를 복사하는 것이 아니라 참조(주소)를 복사하는것(Swallow copy), 똑같은 데이터를 또 복사해야함 (Deep copy)
          let title_copy = [...title];
          title_copy[1] = "여자 코트 추천";
          setTitle(title_copy);
        }}>버튼</button>

      <div className="list">
        <h4>{title[0]}<span style={{fontSize:'12px'}} onClick={()=>{setGood(good+1)}}>💕❤️좋아요❤️💕</span> {good} </h4>
        <p>5월 20일 발행</p>
        <hr/>
      </div>

      <div className="list">
        <h4>{title[1]}</h4>
        <p>5월 21일 발행</p>
        <hr/>
      </div>

      <div className="list">
        <h4>{title[2]}</h4>
        <p>5월 22일 발행</p>
        <hr/>
      </div>

      <Modal></Modal>
    </div>
  );
}
//속성, 태그사이의 중괄호안에는 변수, 함수, import 가능

//모달을 컴포넌트로 만들기 첫글자는 대문자. 파스칼표기법.
function Modal() {
  return ( //return 안에서는 하나의 태그로 묶어줘야 함
    <div className="modal">
      <h4>제목</h4>
      <p>날짜</p>
      <p>상세 내용</p>
    </div>
  );
}

export default App;
//여기서 만든 디자인을 index.html에 전달. 이것을 실행해주는 것이 index.js
