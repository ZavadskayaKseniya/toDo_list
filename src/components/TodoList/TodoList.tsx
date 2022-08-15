import React from 'react';
import TodoForm from "../TodoForm/TodoForm";
import Todo from "../Todo/Todo";



function TodoList() {



    return (
        <>
            <h1>To Do List</h1>
            <TodoForm  />
            <Todo />
        </>
    );
}
export default TodoList;