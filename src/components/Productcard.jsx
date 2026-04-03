import React from 'react'

function Productcard(props) {
  return (
    <div className="flex flex-col justify-between items-center p-6 bg-white rounded-2xl shadow-md hover:shadow-lg transition w-72">
      
      <div className="space-y-2 text-center">
        <h1 className="text-xl font-semibold text-gray-800">
          {props.product}
        </h1>

        <p className="text-sm text-gray-500">
          {props.description}
        </p>
      </div>

      <button 
        onClick={() => props.onAdd(props.product)}
        className="mt-4 w-full bg-purple-500 text-white py-2 rounded-lg font-medium hover:bg-purple-600 transition"
      >
        Buy
      </button>

    </div>
  )
}

export default Productcard