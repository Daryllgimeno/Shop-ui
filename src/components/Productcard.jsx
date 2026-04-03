import React from 'react'

function Productcard(props) {
  return (
    <div>
      <h1>Product: {props.product}</h1>
      <p>Description: {props.description}</p>

      <button onClick={() => props.onAdd(props.product)}>
        Buy
      </button>
    </div>
  )
}

export default Productcard