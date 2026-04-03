import './App.css'
import Productcard from './components/Productcard.jsx'
import { useState } from 'react'

function App() {
  const [items, setItems] = useState([])

  const addItem = (product) => {
    setItems([...items, product])
  }
return (
  <>
    <Productcard 
      product="Shoes" 
      description="Made in Thailand" 
      onAdd={addItem}
    />

    <Productcard 
      product="Bag" 
      description="Made in China" 
      onAdd={addItem}
    />

    <h2>Items:</h2>
    <ul>
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  </>
)
}

export default App