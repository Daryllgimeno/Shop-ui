import React from 'react'

function Productcard(props) {
  return (
    <div className="flex flex-col gap-2 p-8 sm:flex-row sm:items-center sm:gap-6 sm:py-4 ...">
      <h1 className="text-xl font-medium text-black dark:text-whit">Product: {props.product}</h1>
      <p>Description: {props.description}</p>

      <button onClick={() => props.onAdd(props.product)}>
        Buy
      </button>
    </div>
  )
}

export default Productcard