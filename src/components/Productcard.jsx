import React from 'react'

function Productcard(props) {
  return (
    <div className="flex flex-col gap-2 p-8 sm:flex-row sm:items-center sm:gap-6 sm:py-4 ...">
      
      <div className="space-y-2 text-center sm:text-left">
      <div className='space-y-4'>
      <h1 className='text-lg font-bold text-black'>Product: {props.product}</h1>
      <p className='font-medium text-gray-500'>Description: {props.description}</p>
      </div>
    </div>
      <button className="border-purple-200 text-purple-600 hover:border-transparent hover:bg-purple-600 hover:text-white active:bg-purple-700 ..." onClick={() => props.onAdd(props.product)}>
        Buy
      </button>
    </div>
  )
}

export default Productcard