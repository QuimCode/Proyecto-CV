import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Message from './Message.jsx'
import TodoList from './TooList.jsx'
import Navbar from './Navbar.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Navbar></Navbar>
    <Message message="Hello, World!" />
    <TodoList />
  </StrictMode>,
)
