import React from 'react'
import Creator from './Creator'
import Home from './Home'
import Intro from './Intro'
import Mint from './Mint'
import Roadmap from './Roadmap'
import Tutorial from './Tutorial'
import "./App.css"
import Faq from './Faq'

function App() {
  return (
    <>
      <nav>
        <div className="logo">
          <h1 style = {{fontSize: '25px'}}> <a href="#home">Danger Dogs</a>  </h1>
        </div>
        <ul>
          <li><a href="#intro">About</a></li>
          <li><a href="#mint">Mint</a></li>
          <li><a href="#creator">Creator</a></li>
          <li><a href="#roadmap">Roadmap</a></li>
          <a href="https://twitter.com/danger_dogs_" target = "_blank"><img src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c53e.png" alt="" id = "twitter-logo" /></a> 
          <a href="https://opensea.io/collection/danger-dogs" target = "_blank"><button>View on OpenSea</button></a> 

        </ul>
      </nav>
      <Home />
      <Intro />
      <Mint />
      <Roadmap />
      <Tutorial />
      <Creator />
      <Faq />
    </>
  )
}

export default App