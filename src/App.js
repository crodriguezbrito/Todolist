import './App.css';
import Todolist from './components/todolist/todolist';
import Buttom from './components/button/button';

function App() {
  return (
    <div className="App">
      <div className="container">
        <Todolist />
        <Buttom />
      </div>
  
    </div>
  );
}

export default App;
