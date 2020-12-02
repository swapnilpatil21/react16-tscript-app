import React from "react";

export interface IAddTodo {
  addToDoHandler: (text: string) => void;
}

const AddTodo: React.FC<IAddTodo> = (props) => {
  const { addToDoHandler } = props;
  const [todoText, setTodoText] = React.useState("")

  const addTodoSubmitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    if (todoText !== "") {
      addToDoHandler(todoText);
      setTodoText("");
    }
  }
  
  return (
    <div>
      <p><b>Add new Todo</b></p>
      <form id="add-todo-form" onSubmit={addTodoSubmitHandler}>
        <label htmlFor="new-todo">New todo</label>
        <input type="text" value={todoText} onChange={(e) => setTodoText(e.target.value)} />
        <button id="add-todo-submit" type="submit">Add</button>
      </form>
    </div>
  )
}

export default AddTodo;