import axios from "../api/axios.js";
import { useEffect, useState } from "react";

const EmployeeForm = ({fetchEmployee}) => { //props 전달 받기 ({fetchEmployee})
    //입력을 받으면 저장을 해야하고 그럼 변수가 필요
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    //함수를 호출 후 코드 실행하고 서버에 요청
    //Submit은 동기식 요청이라 잠시 중지시켜놓고 axios를 사용하여 비동기식으로 데이터를 제출
    const handleSubmit = async (e) => {
        e.preventDefault();
        try{
            await axios.post('/emp', {name, email}); //'요청주소', {보낼데이터} @PostMapping("/emp") insertEmployee(@RequestBody Employee emp)
            setName('');
            setEmail('');
        }
        catch(err){
            console.log("insert employee error : ", err);
        }
    }

    return(
        <form onSubmit={handleSubmit}> 
            <div>
                <label>Name : </label>
                <input type="text" value={name} onChange={(e)=>setName(e.target.value)} required />
            </div>
            <div>
                <label>Email : </label>
                <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} required />
            </div>
            <button type="submit">Add Employee</button>
            
        </form>
    );
}

export default EmployeeForm;