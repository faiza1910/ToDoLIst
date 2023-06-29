import { useEffect, useState } from "react"
import "./style.css"
import { NewTodoFrom } from "./NewTodoFrom"
import { TodoList } from "./TodoList"
export default function App(){
  
  const [todos, setTodos]= useState(() => {
    const localValue = localStorage.getItem("ITEMS")
    if (localValue === null) return[]
    return JSON.parse(localValue)
  })
  useEffect(() => {
    localStorage.setItem('ITEMS', JSON.stringify(todos))
  }, [todos])//useEffect doesn't return anything but it tales a function as it's argument. To run this code when the objects inside array of the second property changes.
  // What's happening here is that anytime our todos change this function is taking our todos and putting them in the localStorage. Just storing it.  

  function addTodo(title){
    setTodos((currentTodos)=>{
      return [
        ...todos, 
        {id: crypto.randomUUID(), title, completed: false},
    ]
    })
  }
  function toggleTodo(id, completed){
    setTodos(currentTodos=>{
      return currentTodos.map(todo=>{
        if(todo.id===id){
          return {...todo, completed}
        }
        return todo
      })
    })
  }
  function deleteTodo(id){
    setTodos(currentTodos=>{
      return currentTodos.filter(todo=> todo.id !== id)
    })
  }
  return(
    <>
      <NewTodoFrom onSubmit={addTodo}/> 
      <h1>Todo List</h1>
      <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo}/>
    </>
  ) 
}
