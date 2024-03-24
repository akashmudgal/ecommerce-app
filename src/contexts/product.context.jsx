import { createContext,useEffect, useState } from "react";
import PRODUCTS from '../shop-data.json';

export const ProductContext = createContext({
    products: [],
});

export const ProductProvider = ({children})=>{
    const [products,setProducts] = useState([]);

    useEffect(()=>{
        setProducts(PRODUCTS);
    },[]);

    const value = {products};
    return <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
}