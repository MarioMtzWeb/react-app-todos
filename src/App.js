import "./App.css";
import { TodoCounter } from './components/TodoCounter';
import { TodoSearch } from './components/TodoSearch';
import { TodoList } from './components/TodoList';
import { CreateTodoButton } from './components/CreateTodoButton';
import { TodoItem } from './components/TodoItem';

const todos = [
  {text: 'Acabar el curso de Introducción a React',completed : true},
  {text: 'Acabar el curso practico de React',completed : false},
  {text: 'Aprender más de logica y algoritmia',completed : true}
];

function App() {
  return (
    <>
    <div className="containerAddTask">
      <h2>Hola!!! Mario Martinez</h2>
      <label className="label--task"> Crear tarea
        <input className="task--inputAdd" type="text" placeholder="Tarea"/>
      </label>
      <button className="btn--taskAdd">Agregar tarea</button>
    </div>
    <div className="containerApp">
      <TodoCounter/>
      <TodoSearch/>
      <TodoList>
        {todos.map( todo => (
            <TodoItem 
              key={todo.text} 
              text={todo.text}
              completed={todo.completed}
              />
        ))}
      </TodoList>
      <CreateTodoButton/>
      </div>
    </>
  );
}

export default App;
