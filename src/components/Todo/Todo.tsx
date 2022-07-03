import React, { useState } from 'react';
import { RiCloseCircleLine } from 'react-icons/ri';
import '../styles/Todo.sass';
import {Todos} from "../../models/Todos";


const Todo = ( {todos, completeTodo, removeTodo }:{todos:any, completeTodo:any, removeTodo:any}) => {


    return todos.map((todo:Todos, index:number) => (


            <div
            className={todo.isComplete ? 'todo-row complete' : 'todo-row adding-row '}
            key={index}
        >
            <div  key={todo.id} onClick={() => completeTodo(todo.id)}>
                {todo.text}
            </div>
            <div className='icons'>
                <RiCloseCircleLine

                    onClick={() => removeTodo(todo.id)}
                    className={ 'delete-icon ' }
                />

            </div>
        </div>

    ));
};

export default Todo;