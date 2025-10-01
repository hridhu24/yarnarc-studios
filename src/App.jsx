import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Hero from "./Hero";
import About from "./About";
import Card from './Card';
import LikeButton from './LikeButton';

function App() {
  const [showAbout, setShowAbout] = useState(true);

  return (
    <div>
      <Hero />
      <br></br>
      {/* Button to toggle About section */}
      <button onClick={() => setShowAbout(!showAbout)}>
        {showAbout ? "Hide About" : "Show About"}
      </button>

      {/* Conditionally render About */}
      {showAbout && <About />}
      <Card 
        image="https://via.placeholder.com/200"
        title="Crochet Doll"
        description="Handmade amigurumi doll with cotton yarn"
      />
      <LikeButton />
      <Card 
        image="https://via.placeholder.com/200"
        title="Crochet Bag"
        description="Stylish crochet tote bag"
      />
      <LikeButton />
    </div>
  )
}

export default App
