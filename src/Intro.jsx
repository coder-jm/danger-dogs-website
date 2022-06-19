import React from 'react'
import image from './images/31.png'

function Intro() {
  return (
    <section id="intro"  class="animate__animated animate__fadeIn" >
      <div className='wrapper'>
        <h1>What are <br /> Danger Dogs?</h1>
        <p>Danger Dogs is a set of 5,000 fixed artworks on polygon. Danger Dogs was created by me, a 14 year-old programmer, Joel Mathew. I created this project to fund my college tuition. If you like my artworks and want to support me then buy one of these NFTs or share or tweet about them to your friends, family and on your social media.</p>
        <a href="#mint"><button>Get Yours Now</button></a> 
      </div>
        
        <div className = "image-wrap">
          <img src={image} id = "intro-image" />
        </div>
    </section>
  )
}

export default Intro