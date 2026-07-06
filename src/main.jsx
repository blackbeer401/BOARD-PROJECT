import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import Home from './Home'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      {/* <App></App> */}
      <Home></Home>
    </BrowserRouter>
    
  </StrictMode>,
)
