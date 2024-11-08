const getStoredCart=()=>{
    // below code check whether localStorage has 'cart' item or not
    const storedCartString=localStorage.getItem('cart');

    if (storedCartString) {
        return JSON.parse(storedCartString);
    }
    else{
        return [];
    }
}

const saveCartToLocalStorage=cart=>{
    const cartStringified=JSON.stringify(cart);
    localStorage.setItem('cart',cartStringified);
}
const removeFromLS=id=>{
    const cart=getStoredCart();
    // below code will filter all the bottle that is not equal to given bottle . i.e here given bottle is 'id' . and store remaining bottle to 'remaining' variable  
    const remaining=cart.filter(idx=>idx!==id);
    // now in below code we are storing remaining bottle to ls. i.e that bottle that are not given.
    saveCartToLocalStorage(remaining);
}

const addToLocalStorage=id=>{
    const cart=getStoredCart();
    cart.push(id);
    // save to local storage
    saveCartToLocalStorage(cart);

}

export {addToLocalStorage,getStoredCart,removeFromLS};