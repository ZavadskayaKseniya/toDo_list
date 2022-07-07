import React, { useState, useContext } from 'react';
import { RiCloseCircleLine } from 'react-icons/ri';
import '../../styles/Todo.scss';
import {Todos} from "../../models/Todos";
import CrudContext from "../../context";


const Todo = ( todos:Todos[] ) => {

    const { completeTodo,removeTodo} = useContext(CrudContext);

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