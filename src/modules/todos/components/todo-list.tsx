import React from "react";

export interface ITodoList {
  todos: {id: number, text: string}[],
  deleteTodoHandler: (id: number) => void,
}

const TodoList: React.FC<ITodoList> = (props) => {
  const { todos, deleteTodoHandler } = props;

  return (
    <div>
      <p><b>TodoList</b></p>
      <ul>
        {
          todos.length > 0
            ? todos.map(todo => <li key={todo.id}>{todo.text} <span><button onClick={deleteTodoHandler.bind(null, todo.id)} data-testid="Delete">Delete</button></span></li>)
            : "You don't have todo items"
        }
      </ul>
    </div>
  )
}

export default TodoList;
