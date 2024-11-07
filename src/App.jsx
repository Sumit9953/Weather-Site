import { useState } from 'react'
import MainDashboard from './components/MainDashboard'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <MainDashboard />
    </>
  )
}

export default App
