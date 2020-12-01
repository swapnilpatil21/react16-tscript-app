import React from "react";

import TodoList from "./components/todo-list";
import AddTodo from "./components/add-todo";

interface ITodos {
  id: number,
  text: string
}

const Todos = () => {
  const [todos, setTodos] = React.useState<ITodos[]>([])

  const addToDoHandler = (todoText: string) => {
    setTodos(prevTodos => [
      ...prevTodos,
      {id: prevTodos.length+1, text: todoText}
    ]);
  }

  const deleteTodoHandler = (id: number) => {
    setTodos(prevsTodo => {
      return prevsTodo.filter(todo => todo.id !== id)
    });
  }

  return (
    <>
      <AddTodo addToDoHandler={addToDoHandler} />
      <TodoList todos={todos} deleteTodoHandler={deleteTodoHandler}/>
    </>
  )
}

export default Todos;
