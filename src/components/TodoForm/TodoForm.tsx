import React, {useState, useRef, useEffect, ChangeEvent, useContext} from 'react';
import '../../styles/TodoForm.scss';
import { Button , Input} from '@mui/material';
import Context from "../../context/context";





function TodoForm(props:any) {
    const [input, setInput] = useState(props.edit ? props.edit.value : '');
    // const [todos, setTodos] = useState<any>([]);

    const inputRef = useRef(null);

    const myCrud = useContext(Context);


    const handleChange = (e: any) => {
        setInput(e.target.value);
    };

    const handleSubmit = (e: any) => {
        e.preventDefault();


        if (input.trim()) {
            myCrud.addTodo(input);
            setInput('')
        }
    };

    return (
        <form onSubmit={handleSubmit} className='todo-form'>

                <>

                    <Input

                        placeholder='Add a new task'
                        value={input}
                        onChange={handleChange}
                        name='text'
                        className='todo-input'
                        ref={inputRef}
                    />
                    <Button  size="large" variant="outlined" sx={{height:"63px"}} onClick={handleSubmit} className='todo-button'>
                        Add todo
                    </Button>

                    {/*<Button onClick={handleSubmit} />*/}
                </>

        </form>
    );
}

export default TodoForm;