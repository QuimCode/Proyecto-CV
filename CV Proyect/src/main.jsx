import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Message from './Message.jsx'
import TodoList from './TooList.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Message message="Hello, World!" />
    <TodoList />
  </StrictMode>,
)
