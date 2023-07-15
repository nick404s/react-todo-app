import CssBaseline from '@mui/material/CssBaseline';
import TodoList from './components/TodoList';
import NavBar from './components/NavBar';

function App() {
  return (
    <div>
      <CssBaseline />
      <NavBar />
      <TodoList />
    </div>
  );
}

export default App;
