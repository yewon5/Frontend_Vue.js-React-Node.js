import { useEffect, useState } from 'react';
import axios from "./api/axios.js";
import './App.css';
import EmployeeForm from './components/EmployeeForm';
import EmployeeList from './components/EmployeeList';
import { fetchEmployees, addEmployee, deleteEmployee, updateEmployee } from './api/crudApi'

function App() {
  //서버로부터 받아온 데이터를 저장하기 위한 변수
  const [employees, setEmployees] = useState([]);
  //EmployeeForm에서 입력한 데이터가 저장된 변수. 그리고 다시 addEmployee(); 자식에게 전달해줘야함
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  //수정 버튼 눌렀을때 상태변경하는 변수
  const [editingEmployee, setEditingEmployee] = useState(null); //비어있으면 추가 버튼 값이 들어있으면 수정 버튼

  useEffect(() => {loadEmpployees();}, []) // loadEmpployees(); 이렇게만 호출하면 페이지가 실행될때마다 매번 호출됨. 성능저하. useEffect훅의 의존성 빈배열을 사용해서 1번만 실행되도록 할 수 있음

  const loadEmpployees = async () => {
    const data = await fetchEmployees();
    setEmployees(data);
  }

  const handleSubmit = async (e) => { //Submit은 동기식이라 비동기적으로 요청하기 위해 async-axios를 사용함
    e.preventDefault();

    if(editingEmployee){
      await updateEmployee({id:editingEmployee.id, name, email}); //최근의 값을 전달해야됨
      setEditingEmployee(null);
    }
    else{
      await addEmployee({name, email});
    }
      setName('');
      setEmail('');
      loadEmpployees();
  };

  //수정 기능. 수정누르면 폼에 입력한 값 불러오는 기능, 직원 추가 버튼 말고 직원 수정버튼으로 상태 변경 기능
  const handleUpdateClick = (emp) => {
    setName(emp.name);
    setEmail(emp.email);
    setEditingEmployee(emp);
  }
  
  return (
    <div className="App">
      <h1>Employee Management</h1>
      <EmployeeForm name={name} 
                    setName={setName} 
                    email={email} 
                    setEmail={setEmail}
                    handleSubmit={handleSubmit}
                    editingEmployee={editingEmployee} /> {/* Form에도 똑같이 전달해줘야 함 */} 
      <hr/>
      <EmployeeList employees={employees} 
                    deleteEmployee={async(id) => {
                      await deleteEmployee(id);
                      loadEmpployees();
                    }}
                    handleUpdateClick={handleUpdateClick} /> {/* employees={employees} 부모자식이 서로 props로데이터 전달하는 방법 */}
    </div>
  );
}

export default App;
