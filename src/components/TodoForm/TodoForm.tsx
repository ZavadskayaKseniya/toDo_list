import React, { useState,  useRef } from 'react';
import '../../styles/TodoForm.scss';
import Button from "../Button/Button";
import { v4 as uuid } from 'uuid';





function TodoForm(props:any) {
    const [input, setInput] = useState<string | number | readonly string[] | undefined>(props.edit ? props.edit.value : '');
    const [todos, setTodos] = useState<any>([]);

    const inputRef = useRef(null);



    const handleChange = (e: any) => {
        setInput(e.target.value);
    };

    const handleSubmit = (e: any) => {
        e.preventDefault();

        props.onSubmit({
            id: uuid(),
            text: input
        });
        setInput('');
        console.log(todos.id);
    };

    return (
        <form onSubmit={handleSubmit} className='todo-form'>

                <>
                    <input
                        placeholder='Add a new task'
                        value={input}
                        onChange={handleChange}
                        name='text'
                        className='todo-input'
                        ref={inputRef}
                    />
                    <button onClick={handleSubmit} className='todo-button'>
                        Add todo
                    </button>
                    {/*<Button onClick={handleSubmit} />*/}
                </>

        </form>
    );
}

export default TodoForm;