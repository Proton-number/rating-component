import { useState } from 'react'

import './App.css'
import Rating from './components/Rating'



function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
 <Rating />

    </div>
  )
}

export default App
