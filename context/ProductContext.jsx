'use client'

import { createContext, useContext, useState } from "react"


const ProductContext = createContext() /* Crea el contexto que usaremos */

export default function ProductsProvider(props) {
    /* al ser una función que manejará children internos, necesita unos props */
    const { children } = props

    const [cart, setCart] = useState({}) /* el carrito es el componente que usaremos. Es un objeto Json ya que manejará varios atributos
    como lo es el número de producto, su nombre, su precio, su identificador y otros */

    /* en el contexto externo tiene el funcionamiento principal de añadir objetos al carrito. Algo que todos los componentes pueden hacer si tienen esta funcion */
    function handleIncrementProduct(price_id, num, data, noIncrement = false) {

        /* Hace uso del identificador del precio específico, porque algunos productos pueden ser del mismo tipo,  pero diferente talla*/
        /* cantidad de objetos */
        const newCart = {
            ...cart
        }

        /* 0.1- Si el producto ya está en el carrito, puede que solo lo añadamos 1 por uno en la página principal */
        /* si ya está en el carrito y estamos en checkout, podemos añadir una cantidad x que tendrá que aceptar el objeto */
        /* El no increment= false es porque por defecto indicaremos que si existe una cantidad x de objetos, añadimos el numero dado, que sería `1 */
        /* si es true, significa que no añade o decrece por incremento, sino que es por número fijo, en el checkout */
        if (price_id in cart) { // if a product is in the cart, we take the previous value and increment or decrement
            //newCart[price_id] = newCart[price_id] + num
            newCart[price_id] = {
                ...data,
                quantity: noIncrement ? num : newCart[price_id]?.quantity + num
            }
        } else {
            // product not yet in cart, so add it
            //newCart[price_id] = num
            newCart[price_id] = {
                ...data,
                quantity: num
            }
        }

        if (parseInt(newCart[price_id].quantity) <= 0) { // we need to remove the product if it reaches 0
            delete newCart[price_id]
        }

        //update the cart state, overriding it with new object
        setCart(newCart)

    }

    //function handleDeleteProduct(){}

    /* .5- estos son los valores que se van a modificar y que enviamos a que todos los que están dentro del contexto van a usar */
    const value = {
        cart,
        handleIncrementProduct
    }

/* .6-Finalmente,devolveremos en react, el componente del contexto, que encerrará todo lo que rodee este contexto, en este caso, nuestra aplicación completa*/
    return (
        <ProductContext.Provider value={value}>
            {children}
        </ProductContext.Provider>

    )
}

/* .7-Finalmente, exportamos el contexto para que sea usado. Ésto permitira'el uso del contexto en el sistema. */
export const useProducts = () => useContext(ProductContext)