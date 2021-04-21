import './App.css';
import EmployeeList from './components/employee-list';
import listData from './data/list-data.json'

function App() {
  return (
    <div className="App">
      <EmployeeList listData = {listData} />
    </div>
  );
}

export default App;
