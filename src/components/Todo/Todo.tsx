import React, {useContext, useState} from 'react';
import { RiCloseCircleLine } from 'react-icons/ri';
import '../../styles/Todo.scss';
import Todos from "../../models/Todos";
import Context from '../../context/context'


const Todo = ( ) => {

    const myCrud = useContext(Context);

    return myCrud.todos.map((todo:Todos, index:number) => (


            <div
            className={todo.isComplete ? 'todo-row complete' : 'todo-row adding-row '}
            key={index}
        >
            <div className="todo-row__text" key={todo.id} onClick={() => myCrud.completeTodo(todo.id)}>
                {todo.text}
            </div>
            <div className='icons'>
                <RiCloseCircleLine

                    onClick={() => myCrud.removeTodo(todo.id)}
                    className={ 'delete-icon ' }
                />

            </div>
        </div>

    ));
};

export default Todo;
