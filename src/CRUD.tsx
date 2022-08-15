import Todos from "./models/Todos";

export default class CRUD {
    todos: Todos[];
    setTodos : any;

    constructor(todos: Todos[], setTodos: any) {
        this.todos = todos;
        this.setTodos = setTodos;
    }

    addTodo(text:string) {

        const newTodo = new Todos(text);
        this.setTodos([...this.todos, newTodo])

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

