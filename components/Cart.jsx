'use client'

import { useProducts } from "@/context/ProductContext"
import Link from "next/link"

export default function Cart() {
    const { cart } = useProducts()

    //accumulator, current value and current index

    const numProducts = Object.keys(cart).reduce((acc, curr, currIndex) => {
        const numProduct = cart[curr].quantity
        const sum = acc + parseInt(numProduct)
        return sum
    }, 0)

    //console.log('num products accum ', numProducts)

    return (
        <div>
            <Link className="unstyled-button" href={'/cart'}>
                <i className="fa-solid fa-bag-shopping"></i>
                {numProducts > 0 && (
                    <div className="cart-num">
                        <p>{numProducts}</p>
                    </div>
                )}
            </Link>
        </div>
    )
}



/*
the reduce arrow function will take 3 arguments
accumulator, current value and current index
then the reduce has a 2nd argument calld the default value
we build an entity
we start with the default value, and thus it starts at 0 in this case
the accumulator we map over every entity and whatever we return from one iteration , because the accumuilator in the next instance

acc at first will be 0
curr represents the identity in one of the cart keys
the num product with the current key
we will look inside the cart to find the price id, find the product and fnd sum
for every price id, will find the associated umber, untilt it accumulates all of the value
*/