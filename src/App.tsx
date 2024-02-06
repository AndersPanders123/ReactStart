import { useEffect, useState } from 'react'
import './App.css'
import VideoList from './VideoList'

function App() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    console.log("New number:", count)
  }, [count])

  return (
    <>
      <VideoList />
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
      <p>Current Number: {count}</p>
    </>
  )
}

export default App
