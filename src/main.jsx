import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
// import 'bootstrap/dis/css/bootstrap/min.css'
import UserProvider from './contexts/UserContext.jsx'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
         <App />
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
