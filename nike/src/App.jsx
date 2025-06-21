import React from "react"
import Home from './pages/home'

import { BrowserRouter,Routes,Route } from "react-router-dom"
function App() {
  return (
      <BrowserRouter>
          <Routes>
              <Route path="/home" Component={Home}/>
              <Route path="/" Component={Home}/>
          </Routes>
      </BrowserRouter>
  )
}

export default App
