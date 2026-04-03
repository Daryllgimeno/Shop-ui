import './App.css'
import Productcard from './components/Productcard.jsx'

function App() {
  return (
    <>
      <Productcard product="Shoes" description="Made in Thailand" />
      <Productcard product="Bag" description="Made in China" />
    </>
  )
}

export default App