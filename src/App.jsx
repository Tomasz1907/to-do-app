import { useState } from "react"
import ToDoInput from "./components/ToDoInput"
import ToDoList from "./components/ToDoList"

const App = () => {

const todos = [
  '1dasdasdas',
  '2asdasdas',
  '3asda'
]

  return (
    <>
      <ToDoInput/>
      <ToDoList todos={todos}/>
    </>
  )
}

export default App
