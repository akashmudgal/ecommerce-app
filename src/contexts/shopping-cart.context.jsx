import { createContext, useState } from "react";


export const CartContext = createContext({
    productsInCart: [],
    setProductsInCart: ()=>{},
    isCartOpen: false,
    setIsCartOpen: ()=>{}
});

export const CartProvider = ({children})=>{
    const [productsInCart,setProductsInCart] = useState([]);
    const [isCartOpen, setIsCartOpen] = useState(false);
    const value = {productsInCart,setProductsInCart,isCartOpen,setIsCartOpen};
    return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}