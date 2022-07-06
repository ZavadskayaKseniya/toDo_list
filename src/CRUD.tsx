import Todos from "./models/Todos";

export default class CRUD {
    todos: Todos[];
    setTodos : any;

    constructor(todos: Todos[], setTodos: any) {
        this.todos = todos;
        this.setTodos = setTodos;
    }

    addTodo(todo:Todos) {

        if (!todo.text || /^\s*$/.test(todo.text)) {
            return ;
        }

        // @ts-ignore
        const newTodos = [todo, ...todos];


        this.setTodos(newTodos);

    };


    removeTodo (id: string) {

        const removedArr = [...this.todos].filter(todo => todo.id !== id);

        this.setTodos(removedArr);
    };


    completeTodo (id: string) {

        let updatedTodos = this.todos.map((todo:Todos) => {
            if (todo.id === id) {
                todo.isComplete = !todo.isComplete;
            }
            return todo;
        });
        this.setTodos(updatedTodos);
    };

}

