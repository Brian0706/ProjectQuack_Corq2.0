import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import RequestTester from './testingStuff/requestTester'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <RequestTester/>
      </div>
    </>
  )
}

export default App
