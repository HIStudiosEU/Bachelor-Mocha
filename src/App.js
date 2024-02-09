import './App.css';
import TaskList from './components/TaskList';
import Calculator from './components/Calculator';
import TicTacToe from './components/TicTacToe';
function App() {
  return (
    <>
    <h1 style={{textAlign: 'center', marginTop: '25px', marginBottom: '25px'}}>MyUsefulJestApp</h1>
    <Calculator />
    <TaskList />
    <TicTacToe />
    </>
  );
}

export default App;