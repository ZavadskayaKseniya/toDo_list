import React, { useContext,useState} from 'react';

import Context from "../../context/context";
import Todo from "../Todo/Todo";
import TodoForm from "../TodoForm/TodoForm";




function TodoList() {
  const CRUD = useContext(Context);


  return (
    <>
      <h1>To Do List</h1>
      <TodoForm onSubmit={CRUD.addTodo} />
      <Todo
        todos={CRUD.todos}
        completeTodo={CRUD.completeTodo}
        removeTodo={CRUD.removeTodo}
    
      />
    </>
  );
}
export default TodoList;