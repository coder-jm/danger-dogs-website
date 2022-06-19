import React from 'react'

function Card({id, name, description}) {
  return (
    <div id="card">
        <h2>{id}. {name}</h2>
        <p>{description}</p>
    </div>
  )
}

export default Card