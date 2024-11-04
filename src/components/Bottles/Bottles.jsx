import React, { useEffect, useState } from "react";
import Bottle from "../Bottle/Bottle";
import './Bottles.css'
const Bottles = () => {
  const [bottles, setbottles] = useState([]);
  const [cart,setCart]=useState([]);
  useEffect(() => {
    fetch("bottles.json")
      .then((res) => res.json())
      .then((data) => setbottles(data));
  }, []);

  const handleAddToCart=bottle=>{
    // here we have added all the before cart and after the clicked purchased cart
    const newCart=[...cart,bottle];
    setCart(newCart);
  }

  return (
    <div>
      <h2>Bottles Available: {bottles.length} </h2>
      <h4>Cart : {cart.length}</h4>
      <div className="bottle-container">
        {bottles.map((bottle) => (
            // we have sent here handleAddToCart() function as props
          <Bottle bottle={bottle} key={bottle.id} handleAddToCart={handleAddToCart}></Bottle>
        ))}
      </div>
    </div>
  );
};

export default Bottles;
