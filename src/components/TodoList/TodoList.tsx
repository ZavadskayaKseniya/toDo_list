import React, { useState } from 'react';
import TodoForm from "../TodoForm/TodoForm";
import Todo from "../Todo/Todo";
import {Todos} from "../../models/Todos"



function TodoList() {
    const [todos, setTodos] = useState<object>([]);

    const addTodo = (todo:Todos) => {
        if (!todo.text || /^\s*$/.test(todo.text)) {
            return ;
        }

        // @ts-ignore
        const newTodos = [todo, ...todos];


        setTodos(newTodos);

    };



    const removeTodo = (id: string) => {
         // @ts-ignore
        const removedArr = [...todos].filter(todo => todo.id !== id);

        setTodos(removedArr);
    };


    const completeTodo = (id: string) => {
        // @ts-ignore
        let updatedTodos = todos.map((todo:Todos) => {
            if (todo.id === id) {
                todo.isComplete = !todo.isComplete;
            }
            return todo;
        });
        setTodos(updatedTodos);
    };

    return (
        <>
            <h1>To Do List</h1>
            <TodoForm onSubmit={addTodo} />
            <Todo
                todos={todos}
                completeTodo={completeTodo}
                removeTodo={removeTodo}

            />
        </>
    );
}
export default TodoList;