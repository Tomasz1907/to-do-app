

const ToDoCard = (props) => {
  const {children} = props
  return (
    <li>
    {children}
    <button><i className="fa-solid fa-check"></i></button>
    <button><i className="fa-solid fa-pen-to-square"></i></button>
    <button><i className="fa-solid fa-xmark"></i></button>
    </li>
  )
}

export default ToDoCard