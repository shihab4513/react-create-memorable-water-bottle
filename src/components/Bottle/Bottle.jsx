import React from 'react'
import './Bottle.css'
const Bottle = ({bottle,handleAddToCart}) => {
  console.log(bottle)
    const{name,img,price}=bottle;
    return (
    <div className='bottle'>

        <h3>Bottle Name : {name}</h3>
        <img src={img} alt="" />
        <h3>Bottle price : ${price}</h3>
        {/* If there is no parameter in function we can just use onClick */}
        <button onClick={()=>handleAddToCart(bottle)}>Purchase</button>

    </div>
  )
}

export default Bottle