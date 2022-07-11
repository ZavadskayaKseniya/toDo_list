import '../../styles/Todo.scss';

import React, {useContext, useState} from 'react';
import { RiCloseCircleLine } from 'react-icons/ri';

import Context from '../../context/context';
import Todos from "../../models/Todos";


const Todo = ( ) => {
  const CRUD = useContext(Context);

  return CRUD.todos.map((todo:Todos, index:number) => (


    <div
      className={todo.isComplete ? 'todo-row complete' : 'todo-row adding-row '}
      key={index}
    >
      <div  key={todo.id} onClick={() => CRUD.completeTodo(todo.id)}>
        {todo.text}
      </div>
      <div className='icons'>
        <RiCloseCircleLine

          onClick={() => CRUD.removeTodo(todo.id)}
          className='delete-icon '
        />

      </div>
    </div>

  ));
};

export default Todo;