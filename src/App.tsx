import React, {useContext, useEffect, useState} from 'react';
import './styles/App.scss';
import TodoList from "./components/TodoList/TodoList";
import Context from "./context/context";
import Todos from "./models/Todos";
import CRUD from "./CRUD";



function App() {

    const [todos, setTodos] = useState<Todos[]>([]);

    useEffect(()=>{
        localStorage.setItem('todos', JSON.stringify('todos'))
    }, [])

    useEffect(()=>{
        // const raw= localStorage.getItem('todos')||[]
        // setTodos(JSON.parse(raw))
    },[])




   const useCrud = new CRUD(todos,setTodos);

    return (
        <Context.Provider value={useCrud}>
            <div className='todo-app'>
            <TodoList/>
            </div>
        </Context.Provider>
    );
}

export default App;
