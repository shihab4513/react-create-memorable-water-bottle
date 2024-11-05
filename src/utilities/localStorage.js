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

const addToLocalStorage=id=>{
    const cart=getStoredCart();
    cart.push(id);
    // save to local storage
    saveCartToLocalStorage(cart);

}

export {addToLocalStorage};