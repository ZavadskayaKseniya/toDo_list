import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import App from "./App";
import CrudContext from "./context";

function Main(){
    const [todos, setTodos] = useState<any>([]);

    return (
    <React.StrictMode>
        <CrudContext.Provider value={{todos, setTodos}}>
            <App />
        </CrudContext.Provider>
    </React.StrictMode>
    )
}

ReactDOM.render(
    <Main />,
    document.getElementById('root')
);
