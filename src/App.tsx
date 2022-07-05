import React, {useState} from 'react';
import './styles/App.scss';
import TodoList from "./components/TodoList/TodoList";
import {Context} from "./context/context";
import Todos from "./models/Todos";


 const addTodo = (todo:Todos) => {

    // if (!todo.text || /^\s*$/.test(todo.text)) {
    //     return ;
    // }
    //
    // // @ts-ignore
    // const newTodos = [todo, ...todos];
    //
    //
    // setTodos(newTodos);

};


const removeTodo = (id: string) => {

    // const removedArr = [...todos].filter(todo => todo.id !== id);
    //
    // setTodos(removedArr);
};


const completeTodo = (id: string) => {

    // let updatedTodos = todos.map((todo:Todos) => {
    //     if (todo.id === id) {
    //         todo.isComplete = !todo.isComplete;
    //     }
    //     return todo;
    // });
    // setTodos(updatedTodos);
};

function App() {

    return (
        <Context.Provider value={{
            addTodo,removeTodo,completeTodo
        }}>
            <div className='todo-app'>
            <TodoList/>
            </div>
        </Context.Provider>
    );
}

export default App;
