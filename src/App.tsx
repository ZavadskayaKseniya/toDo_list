import React, {useEffect, useState} from 'react';
import './styles/App.scss';
import TodoList from "./components/TodoList/TodoList";
import Context from "./context/context";
import Todos from "./models/Todos";



function App() {

    const [todos, setTodos] = useState<any>([]);

    useEffect(()=>{
        localStorage.setItem('todos', JSON.stringify('todos'))
    }, [])

    useEffect(()=>{
        // const raw= localStorage.getItem('todos')||[]
        // setTodos(JSON.parse(raw))
    },[])

    const addTodo = (todo:Todos) => {

        if (!todo.text || /^\s*$/.test(todo.text)) {
            return ;
        }

        // @ts-ignore
        const newTodos = [todo, ...todos];


        setTodos(newTodos);

    };


    const removeTodo = (id: string) => {

        const removedArr = [...todos].filter(todo => todo.id !== id);

        setTodos(removedArr);
    };


    const completeTodo = (id: string) => {

        let updatedTodos = todos.map((todo:Todos) => {
            if (todo.id === id) {
                todo.isComplete = !todo.isComplete;
            }
            return todo;
        });
        setTodos(updatedTodos);
    };


    const value ={
        addTodo,
        removeTodo,
        completeTodo,
        todos,
        setTodos
    }

    return (
        <Context.Provider value={value}>
            <div className='todo-app'>
            <TodoList/>
            </div>
        </Context.Provider>
    );
}

export default App;
