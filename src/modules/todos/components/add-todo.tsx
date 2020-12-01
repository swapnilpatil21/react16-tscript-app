import React from "react";

export interface IAddTodo {
  addToDoHandler: (text: string) => void;
}

const AddTodo: React.FC<IAddTodo> = (props) => {
  const { addToDoHandler } = props;
  const newTodoTextRef = React.useRef<HTMLInputElement>(null);

  const addTodoSubmitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    if (newTodoTextRef.current!.value !== "") {
      addToDoHandler(newTodoTextRef.current!.value);
    }
  }
  
  return (
    <div>
      <p data-testid="add-new-label"><b>Add new Todo</b></p>
      <form data-testid="add-todo-form" onSubmit={addTodoSubmitHandler}>
        <label htmlFor="new-todo">New todo</label>
        <input type="text" data-testid="new-todo" ref={newTodoTextRef} />
        <button data-testid="submit" type="submit">Add</button>
      </form>
    </div>
  )
}

export default AddTodo;