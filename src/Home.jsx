import React from 'react'

function Home() {
  return (
    <section id="home" style = {{textAlign: 'center'}} class="animate__animated animate__fadeIn" >
      <div className="wrapper">

        <h1 className='animate__animated animate__tada'>Danger Dogs</h1>
        <p>A 5000 fixed unique artworks NFT collection is joining the <br></br>NFT space on the polygon blockchain.</p>
        <a href="https://opensea.io/collection/danger-dogs" target = "_blank"><button>View on OpenSea</button></a> 
      </div>
    </section>
  )
}

export default Home