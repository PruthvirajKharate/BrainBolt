import { useState } from 'react'
import SignupPage from './components/SignupPage'
import './App.css'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
 
function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignupPage/>} />
      </Routes>
    </Router>
  )
}

export default App
