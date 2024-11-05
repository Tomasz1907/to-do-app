import ToDoCard from "./ToDoCard"

const ToDoList = (props) => {
  const {todos} = props
  return (
    <ul>
      {todos.map((todo, todoIndex)=>{
        return(
          <ToDoCard key={todoIndex}>
          <p>{todo}</p>
        </ToDoCard>
        )

      })
      }
    </ul>
  )
}

export default ToDoList