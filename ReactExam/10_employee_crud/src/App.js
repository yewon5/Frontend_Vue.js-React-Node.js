import './App.css';
import EmployeeForm from './components/EmployeeForm';
import EmployeeList from './components/EmployeeList';

function App() {
  return (
    <div className="App">
      <h1>Employee Management</h1>
      <EmployeeForm />
      <hr/>
      <EmployeeList />
    </div>
  );
}

export default App;
