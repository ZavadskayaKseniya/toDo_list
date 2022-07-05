import React, { useState, useContext} from 'react';
import TodoForm from "../TodoForm/TodoForm";
import Todo from "../Todo/Todo";
import Todos from "../../models/Todos"
import Context from "../../context/context";




function TodoList() {
    // const [todos, setTodos] = useState<any>([]);
const value = useContext(Context);


    return (
        <>
            <h1>To Do List</h1>
            <TodoForm onSubmit={value.addTodo} />
            <Todo
                todos={value.todos}
                completeTodo={value.completeTodo}
                removeTodo={value.removeTodo}

            />
        </>
    );
}
export default TodoList;