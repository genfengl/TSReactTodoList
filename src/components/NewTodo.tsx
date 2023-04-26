import React, { useRef } from 'react'

interface NewTodoProps {
  todoAddHandler: (enteredText: string) => void
}

const NewTodo: React.FC<NewTodoProps> = ({ todoAddHandler }) => {
  const textInputRef = useRef<HTMLInputElement>(null)

  const todoSubmitHandler = (e: React.FormEvent) => {
    e.preventDefault()
    const enteredText = textInputRef.current!.value
    console.log(enteredText);
    todoAddHandler(enteredText)
  }

  return (
    <>
      <form onSubmit={todoSubmitHandler}>
        <div>
          <label htmlFor='todo-text'>Todo Text</label>
          <input type="text" id="todo-text" ref={textInputRef} />
        </div>
        <button type="submit">ADD TODO</button>
      </form>
    </>

  )
}

export default NewTodo