import './App.css';
import TaskList from './components/TaskList';
import Calculator from './components/Calculator.js';
function App() {
  return (
    <>
    <h1 style={{textAlign: 'center', marginTop: '25px', marginBottom: '25px'}}>MyUsefulMochaApp</h1>
    <Calculator />
    <TaskList />
    </>
  );
}

export default App;