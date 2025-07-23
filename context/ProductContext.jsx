'use client'

import { createContext, useContext, useState } from "react"

const ProductContext = createContext()

export default function ProductsProvider(props){
    const {children} = props

    const [cart, setCart] = useState({})

    function handleIncrementProduct(price_id,num, data){
        const newCart = {
            ...cart
        }

        if (price_id in cart){ // if a product is in the cart, we take the previous value and increment or decrement
            //newCart[price_id] = newCart[price_id] + num
            newCart[price_id] = {
                ...data,
                quantity: newCart[price_id]?.quantity + num
            }
        } else{
            // product not yet in cart, so add it
            //newCart[price_id] = num
            newCart[price_id] = {
                ...data,
                quantity: num
            }
        }

        if (newCart[price_id].quantity === 0){ // we need to remove the product if it reaches 0
            delete newCart[price_id]
        }

        //update the cart state, overriding it with new object
        setCart(newCart)

    }

    //function handleDeleteProduct(){}

    const value = {
        cart,
        handleIncrementProduct
    }

    useContext
    return (
        <ProductContext.Provider value={value}>
            {children}
        </ProductContext.Provider>

    )
}

export const useProducts = () => useContext(ProductContext)