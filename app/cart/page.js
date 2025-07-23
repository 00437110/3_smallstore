'use client'

import { useProducts } from "@/context/ProductContext";

export default function CartPage() {

  const { cart } = useProducts()

  const totalPrice = Object.keys(cart).reduce((acc, curr, currIndex) => {
    const numProduct = cart[curr].quantity
    //const actual = cart[curr]
    const totalNumber = numProduct * cart[curr].prices[0].unit_amount / 100
    const sum = acc + totalNumber
    return sum
  }, 0)

  //console.log('total price of stuff: ' + totalPrice)

  return (
    <div>
      <section className="cart-section">
        <h2>Your Cart</h2>
        <div className="cart-container">
          {Object.keys(cart).map((item, itemIndex) => {
            const 
            return (
              <div key={itemIndex} className="cart-item">

              </div>
            )
          })}
        </div>
      </section>

    </div>
  );
}
