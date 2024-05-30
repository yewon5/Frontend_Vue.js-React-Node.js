/* eslint-disable */

import {useState} from "react";


function ID({ inputInfo, infoHandler }) {
  return (
    <div>
      ID: <input type="text" name="id" value={inputInfo.id} onChange={infoHandler} />
    </div>
  );
}

function PW({ inputInfo, infoHandler }) {
  return (
    <div>
      PW: <input type="password" name="pw" value={inputInfo.pw} onChange={infoHandler} />
    </div>
  );
}

function App() {
  const [info, setInfo] = useState({ id: "aaa", pw: "111" });
  const [inputInfo, setInputInfo] = useState({id:'', pw:''});

  const infoHandler = (e) => {
    setInputInfo({ ...inputInfo, [e.target.name]: e.target.value });
  };

  const Login = () => {
    if (inputInfo.id === info.id && inputInfo.pw === info.pw){
  }

  return (
    <div className="App">
      <ID inputInfo={inputInfo} infoHandler={infoHandler} />
      <PW inputInfo={inputInfo} infoHandler={infoHandler} />
      <button onClick={Login}>Login</button>
    </div>
  );
}

export default App;
