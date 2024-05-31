import axios from "../api/axios.js";
import { useEffect, useState } from 'react';

const EmployeeList = ({employees, deleteEmployee, handleUpdateClick}) => { //리액트는 props로 부모자식 서로 데이터를 주고 받음
    /*
    코드 따로 분리
    //서버로부터 받아온 데이터를 저장하기 위한 변수
    //const [employees, setEmployees] = useState([]);

    useEffect(()=>{
        fetchEmployee();
    }, []);

    //axios는 비동기 함수라서 순서를 제어하기 위해 async.await 이용
    //데이터가 있든 없든 서버가 켜있으면 계속 실행됨 -> useEffect 의존성 빈배열을 준비해서 1번만 실행되도록 한다.
    const fetchEmployee = async () => {
        //axios는 외부장치와 연결할때 예외처리 필수
        try{
            const response = await axios.get('/emp'); //@GetMapping("/emp") getAllEmployees() 
            //console.log(response); //잘 받아왔는지 확인!!
            setEmployees(response.data)//받아올때는 세터메서드
        }
        catch(err){
            console.log('fetch err : ', err); //CORS 오류 : 컨트롤러에서 @CrossOrigin(origins = "http://localhost:3000")
        }
    }

    const handleDelete = async (id) => {
        try{
            await axios.delete(`/emp/${id}`);
            // 삭제 후 성공 시 UI 업데이트
            setEmployees(employees.filter(emp => emp.id !== id));
        }
        catch (err){
            console.log('Delete err : ', err);
        }
    }
    */

    return(
        <div>
            <h2>EmployeeList</h2>
            <table>
                <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>-</th>
                </tr>
                </thead>
                <tbody>
                    {
                        employees.map((emp)=>( //employees서버로부터 데이터를 받은 객체. 
                            <tr key={emp.id}>
                                <td>{emp.id}</td>
                                <td>{emp.name}</td>
                                <td>{emp.email}</td>
                                <td>
                                    <button onClick={() => {deleteEmployee(emp.id)}}>삭제</button>
                                    <button onClick={() => {handleUpdateClick(emp)}}>수정</button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    );
}

export default EmployeeList;
