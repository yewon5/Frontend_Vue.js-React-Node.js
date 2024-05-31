import axios from "./axios.js";
  
  //서버로부터 데이터 받기
  export const fetchEmployees = async () => {
    const response = await axios.get("/emp") //response를 employees 저장하면 됨
    return response.data; //axios는 비동기라 서버로부터 데이터를 다 받아온다음에 데이터를 저장해야한다. await로 순서 제어  
  }

  export const addEmployee = async (emp) => {
    await axios.post('/emp', emp) //'요청주소', 보낼데이터
  }

  export const deleteEmployee = async (id) => {
    await axios.delete(`/emp/${id}`);
  }

  export const updateEmployee = async (emp) => {
    console.log(emp.name, emp.email) 
    await axios.put(`/emp/${emp.id}`,{name:emp.name, email:emp.email}); 
  }