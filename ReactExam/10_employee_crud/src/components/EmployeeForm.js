import axios from "../api/axios.js";
import { useEffect, useState } from "react";
/*
코드 따로 분리
const EmployeeForm = ({fetchEmployee}) => { //props 전달 받기 ({fetchEmployee})
    //입력을 받으면 저장을 해야하고 그럼 변수가 필요
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    //서버로 바로 전달되기 전에 함수를 통해서 코드 실행하고 서버에 요청
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
}
*/
    const EmployeeForm = ({name, setName, email, setEmail, handleSubmit, editingEmployee}) => { //{} props를 부모에게 전달
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
                <button type="submit">{editingEmployee ?'수정' : '추가'}</button>
            </form>
        );
    }
export default EmployeeForm;