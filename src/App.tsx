import React from 'react';
import './components/styles/App.css';
import TodoList from "./components/TodoList/TodoList";


type AppState = {

}

type AppProp= {

}

function App() {
    return (
        <div className='todo-app'>
        <TodoList/>
        </div>
    );
}

export default App;
