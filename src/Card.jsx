import React from 'react'
import { useCart } from 'react-use-cart'

function Card() {
    const {items, isEmpty, totalUniqueItems, totalItems, cartTotal, updateItemQuantity, removeItem, emptyCart} = useCart()
    console.log({items})
    if(isEmpty) return <h1>Карта азыр бош</h1>
  return (
        <section className="py-4 container">
            <div className="row justify-content-center">
                <div className="col-12">
                    <h5>Cart({totalUniqueItems}) total-items: ({totalItems})  total: ({cartTotal})</h5>
                </div>
            </div>
            <ul>
                {items.map((item) => (
                <li key={item.id}>
                    <img src={item.img} class="flex-none w-48"/>
                    {item.quantity} x {item.title} &mdash;
                    <button
                    onClick={() => updateItemQuantity(item.id, item.quantity - 1)}
                    >
                    -
                    </button>
                    <button
                    onClick={() => updateItemQuantity(item.id, item.quantity + 1)}
                    >
                    +
                    </button>
                    <button onClick={() => removeItem(item.id)}>&times;</button>
                </li>
                ))}
            </ul>
        </section>
    )
}

export default Card