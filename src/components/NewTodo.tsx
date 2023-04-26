import React, { useState } from "react";

import './NewTodo.css'

interface NewTodoProps {
  onAddTodo: (enteredText: string) => void;
}

const NewTodo: React.FC<NewTodoProps> = ({ onAddTodo }) => {
  const [textInput, setTextInput] = useState("");
  // const textInputRef = useRef<HTMLInputElement>(null);

  const todoSubmitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    const enteredText = textInput;
    console.log(enteredText);
    onAddTodo(enteredText);
    setTextInput('')
  };

  return (
    <>
      <form onSubmit={todoSubmitHandler}>
        <div>
          <label htmlFor="todo-text">Todo Text</label>
          <input
            type="text"
            id="todo-text"
            value={textInput}
            onChange={(event) => setTextInput(event.target.value)}
          />
        </div>
        <button type="submit">ADD TODO</button>
      </form>
    </>
  );
};

export default NewTodo;
