import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AddTodoForm from './Components/AddTodoForm'
import TodoList from './Components/TodoList'

function App() {
  const [todos, setTodos] = useState([
  { id: 1, text: "Buy Flowers", completed: false },
  { id: 2, text: "Write a code", completed: true },
  { id: 3, text: "Set an Alarm", completed: false }
])
 const handleAddTodo = (text) => {
    const newTodo = {
      id: Date.now(),
      text,
      completed: false,
    }
    setTodos([...todos, newTodo])
  }

  return (
    <div className="app-container">
      <h1>TODO</h1>
      <AddTodoForm onAddTodo={handleAddTodo} />
      <TodoList todos={todos} />
    </div>)
}

export default App
