import React from 'react';
import '../styles/Button.css';


function Button({handleSubmit}) {


    return (
        <div onClick={handleSubmit} className='todo-button'>
            Add todo
        </div>
    );
}

export default Button;