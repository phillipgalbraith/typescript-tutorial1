import React, { useState } from 'react';
import { DragDropContext } from 'react-beautiful-dnd';
import './App.css';
import InputFeild from './components/InputFeild';
import TodoList from './components/TodoList';
import { Todo } from './model';

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);
  const [completedTodos, setCompletedTodos] = useState<Todo[]>([]);
  
  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (todo) {
      setTodos([...todos, {todo, id: Date.now(), isDone: false }]);
      setTodo("");
    }
  };

  return (
    <DragDropContext onDragEnd={()=>{}}>
      <div className = "App">
        <span className="heading">Taskify</span>
        <InputFeild handleAdd={handleAdd} todo={todo} setTodo={setTodo}/>
        <TodoList 
          todos={todos} 
          setTodos={setTodos}
          completedTodos={completedTodos} 
          setCompletedTodos={setCompletedTodos}
        />
      </div>;
    </DragDropContext>
  )
}

export default App;
