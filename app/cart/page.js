'use client'

import { useProducts } from "@/context/ProductContext";
import { useRouter } from "next/navigation";

export default function CartPage() {
  const router = useRouter()

  const { cart } = useProducts()

  const totalPrice = Object.keys(cart).reduce((acc, curr, currIndex) => {
    const numProduct = cart[curr].quantity
    //const actual = cart[curr]
    const totalNumber = numProduct * cart[curr].prices[0].unit_amount / 100
    const sum = acc + totalNumber
    return sum
  }, 0)

  async function createCheckout() {
    try {
      const baseURL = process.env.NEXT_PUBLIC_BASE_URL
      const lineItems = Object.keys(cart).map((item,itemIndex)=>{
        return{
          price: item,
          quantity: cart[item].quantity
        }
      })

      const response = await fetch(baseURL + '/api/checkout', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify({ lineItems })
      })
      const data = await response.json()

      if(response.ok){
        console.log(data)
        router.push(data.url)
      }

    } catch (err) {
      console.log('Error creating checkout', err.message)

    }
  }

  //console.log('total price of stuff: ' + totalPrice)

  return (
    <div>
      <section className="cart-section">
        <h2>Your Cart</h2>
        <div className="cart-container">
          {Object.keys(cart).map((item, itemIndex) => {
            const itemData = cart[item]
            const itemQuantity = itemData?.quantity

            const imgName = itemData.name === 'Medieval Dragon Month Planner' ?
              'planner' :
              itemData.name.replaceAll(' Sticker.png', '').replaceAll('_', '')
            const imgUrl = 'low_res/' + imgName + '.jpeg'

            return (
              <div key={itemIndex} className="cart-item">
                <img src={imgUrl} alt={imgName + '-img'} />
                <div className="cart-item-info">
                  <h3>{itemData.name}</h3>
                  <p>{itemData.description.slice(0, 100)}{itemData.description.length > 100 ? '...' : ''}</p>
                  <h4>${itemData.prices[0].unit_amount / 100}</h4>
                  <div className="quantity-container">
                    <p><strong>Quantity</strong></p>
                    <input value={itemQuantity} placeholder="2" onChange={() => { }} />
                  </div>
                </div>
              </div>
            )
          })}
        </div>
        <div className="checkout-container">
          <button >&larr; Continue Shopping</button>
          <button onClick={createCheckout}>Checkout &rarr;</button>
        </div>
      </section>

    </div>
  );
}
