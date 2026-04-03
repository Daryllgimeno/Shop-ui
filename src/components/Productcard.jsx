import React from 'react'



function Productcard(product,description, onAdd) {
  return (
    <div>
      <h1>Product: {product}</h1>
      <p>Description: {description}</p>
       <button onClick={()=> onAdd(product)}>
    Buy
  </button>
    </div>
  );
 
}
export default Productcard;