// import './App.css';
import { TodoCounter } from './components/TodoCounter';
import { TodoSearch } from './components/TodoSearch';
import { TodoList } from './components/TodoList';
import { CreateTodoButton } from './components/CreateTodoButton';
import { TodoItem } from './components/TodoItem';

const todos = [
  {text: 'Acabar el curso de Introducción a React',completed : false},
  {text: 'Acabar el curso practico de React',completed : false},
  {text: 'Aprender más de logica y algoritmia',completed : false}
];

function App() {
  return (
    <>
      <TodoCounter/>
      <TodoSearch/>
      <TodoList>
        {todos.map( todo => (
            <TodoItem key={todo.text} text={todo.text}/>
        ))}
      </TodoList>
      <CreateTodoButton/>
    </>
  );
}

export default App;
