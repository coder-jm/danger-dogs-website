import React from 'react'

function Faq() {

  return (
    <section id="faq" class="animate__animated animate__fadeIn">
        <h1 style = {{textAlign:'center'}}>Frequently Asked Questions</h1>

        <button class="accordion">Why should I buy a Danger Dog?</button>
        <div class="panel">
        <p>First thing, it's free. So there is no risk that you need to take. In the future when many people must have heard about our project they would want to get a Danger Dog and you can sell it to them at your price. All the money generated from this project as a form of royalty (percentage of all transactions with these NFTs) will go to fund my college tuition. </p>
        </div>

        <button class="accordion">How much is a Danger Dog?</button>
        <div class="panel">
        <p>It's FREE. You just need to pay for the extremely small gas fees in Polygon (MATIC) which ranges from $0.0005 to $0.2.</p>
        </div>

        <button class="accordion">How do I get MATIC?</button>
        <div class="panel">
        <p>If you already have some form of crypto in a exchange you can trade it for MATIC or if you don't then you can go to coinbase or binance and buy some MATIC.</p>
        </div>

        <button class="accordion">What is Polygon?</button>
        <div class="panel">
        <p>Polygon is a cryptocurrency, with the symbol MATIC, and also a technology platform that enables blockchain networks to connect and scale. Polygon—"Ethereum's internet of blockchains"— launched under the name Matic Network in 2017.</p>
        </div>

        <button class="accordion">What are NFTs?</button>
        <div class="panel">
        <p>NFT means non-fungible-token. For example, the US dollar is fungible — which means it can be exchanged for other currencies, while your birth certificate is non-fungible, making it unique and one of a kind. So NFTs are too non-fungible, unique and one of a kind, giving them immense value. NFTs can be images, videos and audios.</p>
        </div>
    </section>
  )
}

export default Faq