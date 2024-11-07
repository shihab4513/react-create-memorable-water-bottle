import React, { useEffect, useState } from "react";
import Bottle from "../Bottle/Bottle";
import './Bottles.css'
import { addToLocalStorage, getStoredCart } from "../../utilities/localStorage";
import Cart from "../Cart/Cart";
const Bottles = () => {
  const [bottles, setbottles] = useState([]);
  const [cart,setCart]=useState([]);
  useEffect(() => {
    fetch("bottles.json")
      .then((res) => res.json())
      .then((data) => setbottles(data));
  }, []);
  // load cart from local storage
  useEffect(()=>{
    console.log('called the used effect ',bottles.length)
    if (bottles.length>0) {
      const storedCart=getStoredCart();
      // console.log(storedCart);
      const savedCart=[];
      for (const id of storedCart) {
        console.log(id);
        const bottle=bottles.find(bottle=>bottle.id===id);
        if (bottle) {
          savedCart.push(bottle);
        }
      }
      console.log('saved cart',savedCart);
      setCart(savedCart);
    }
    
  },[bottles])

  const handleAddToCart=bottle=>{
    // here we have added all the before cart and after the clicked purchased cart
    const newCart=[...cart,bottle];
    setCart(newCart);
    addToLocalStorage(bottle.id);
  }

  return (
    <div>
      <h2>Bottles Available: {bottles.length} </h2>
      
      <Cart cart={cart}></Cart>
      
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
