import './App.css'
import Productcard from './components/Productcard.jsx'
import { useState } from 'react'

function App() {
  const [items, setItems] = useState([])

  const addItem = (product) => {
    setItems([...items, product])
  }

  return (
    <div className="min-h-screen bg-gray-100 p-6 flex flex-col items-center gap-8">
      

      <div className="flex flex-col sm:flex-row gap-6 justify-center">
        <Productcard 
          product="Shoes" 
          description="Made in Philippines" 
          onAdd={addItem}
        />

        <Productcard 
          product="belt" 
          description="Made in Taiwan" 
          onAdd={addItem}
        />
      </div>


      <div className="bg-white p-6 rounded-2xl shadow-md w-72">
        <h2 className="text-xl font-semibold mb-3 text-center">Items:</h2>
        {items.length === 0 ? (
          <p className="text-gray-500 text-center">Add Item</p>
        ) : (
          <ul className="space-y-2">
            {items.map((item, index) => (
              <li key={index} className="text-gray-700 text-center">{item}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}

export default App