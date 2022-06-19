import React from 'react'
import image from './images/12.png'
import Card from './Card'

function Roadmap() {
  const roadmap = [
    {
      id: 1,
      name: 'Launch' , 
      description: 'In this stage I am going to deploy this NFT collection to the polygon blockchain with the help of thirdweb.'
    },
    {
      id: 2,
      name: 'Market' , 
      description: 'In this stage I am going to market these NFTs on twitter so that the world knows about our project.'
    },
    {
      id: 3,
      name: 'Merchandise' , 
      description: 'In this stage I am going to create some sweet merchandise for our NFTs Collection that you can buy.'
    },
    {
      id: 4,
      name: 'Collaboration' , 
      description: 'In this stage I am going to collaborate with celebrities or other artists and maybe do some epic giveaway.'
    },
    {
      id: 5,
      name: 'Game' , 
      description: 'In this stage I am going to create a NFT game for our NFTs that you can play and win rewards and with those rewards buy our NFTs. I am really excited for this stage. '
    },
  ]

  return (
    <section id="roadmap"  class="animate__animated  animate__fadeIn" >
      <div className="image-wrap">
        <img src={image} id = "roadmap-image"  />
      </div>
      <div className="wrapper">
        <h1>Roadmap</h1>
        <p>This roadmap outlines our goals and where we want to take Danger Dogs. We have a lot of ideas and concepts that we are working on.</p>
        <div className="cards">
          {
            roadmap.map(item => {
              return (
                <Card key={item.id} id={item.id} name={item.name} description={item.description}  />
              )
            })
          }
        </div>
      </div>
    </section>
  )
}

export default Roadmap