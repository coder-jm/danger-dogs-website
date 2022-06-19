import React from 'react'
import  t1 from './images/t1.png'
import t2 from './images/t2.png'
import t3 from './images/t3.png'
import t4 from './images/t4.png'

function Tutorial() {
  return (
    <section id="tutorial"  class="animate__animated  animate__fadeIn" >
        <h1>How was this made?</h1>
      <div style = {{width: '100%' , height: '100%' , textAlign: 'center'}}>
        <h2>1. Create the NFT's layers</h2>
        <p>I used a tool called figma to make different layers for my NFTs. I made 20 backgrounds, 20 eye patch colors, 9 accessories and 5 face props.</p>
        <img src={t1} id = "t-img" />
        <h2>2. Generate the NFTs and metadata</h2>
        <p>I generated 5,000 unique NFTs with the Hashlips Art Engine's code which is there on github. Then I uploaded these images on IPFS and Pinata to use it's CID and then I updated the metadata of each image with it's CID</p>
        <img src={t2} id = "t-img" />
        <h2>3. Creating the NFT drop</h2>
        <p>Then I used thirdweb a free web3 tool to which I uploaded all NFTs and it's metadata and I set up the claim phase for minting the NFTs.</p>
        <img src={t3} id = "t-img"/>
        <h2>4. Creating the website for the NFT drop</h2>
        <p>I then made a website for this NFT drop with React and Thirdweb and it was pretty easy. You can check the source code for this website on github.</p>
        <img src={t4} id = "t-img" />
        </div>
    </section>
  )
}

export default Tutorial