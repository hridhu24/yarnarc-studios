import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="h-screen bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 flex flex-col items-center justify-center text-center px-4">
      <h1 className="text-5xl font-bold text-white mb-4">Welcome to YarnArc Studios</h1>
      <p className="text-xl text-white mb-8">Showcasing my crochet creations with style and flair</p>
      <button className="bg-white text-purple-700 font-semibold py-2 px-6 rounded-full hover:bg-purple-100 transition duration-300">
        Explore My Work
      </button>
    </div>
  )
}

export default App
