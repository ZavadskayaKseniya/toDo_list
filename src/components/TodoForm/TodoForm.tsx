import React, {useState, useRef, useEffect} from 'react';
import '../../styles/TodoForm.scss';
import { Button , Input} from '@mui/material';





function TodoForm(props:any) {
    const [input, setInput] = useState<string | undefined>(props.edit ? props.edit.value : '');
    // const [todos, setTodos] = useState<any>([]);

    const inputRef = useRef(null);




    const handleChange = (e: any) => {
        setInput(e.target.value);
    };

    const handleSubmit = (e: any) => {
        e.preventDefault();

        props.onSubmit({
            // id: uuid(),
            text: input
        });
        setInput('');

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
                    <Button  size="large" variant="outlined" onClick={handleSubmit} className='todo-button'>
                        Add todo
                    </Button>

                    {/*<Button onClick={handleSubmit} />*/}
                </>

        </form>
    );
}

export default TodoForm;