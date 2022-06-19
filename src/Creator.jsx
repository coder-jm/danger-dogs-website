import React from 'react'
import image from './images/pic.jpeg'

function Creator() {
  return (
    <section id="creator"  class="animate__animated animate__fadeIn" >
      <div className="wrapper">

        <h1>Creator</h1>
        <p>
          Hey! I am Joel Mathew. I am 14 years old and I'm a blockchain developer. I am pretty sure that NFTs are going to be the future. If you like my NFT drop and want to work with me you can send an email to OVjoelmathew@gmail.com .
          <br />
          <br />
          My dream is to get into Harvard University. But as we all know college is expensive. So all the revenue generated from this project will go to fund my college tuition. I will be very grateful if you can support me.
        </p>
        <a href="https://twitter.com/danger_dogs_" target="_blank"><button id="follow">Follow my Twitter</button></a> 
      </div>
      <div className="image-wrap">
        <img src={image} alt="creator" id = "img"/>
      </div>
    </section>
  )
}

export default Creator