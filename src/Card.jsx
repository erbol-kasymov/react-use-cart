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
                    <h5>Cart({totalUniqueItems}) total-items: ({totalItems})</h5>
                </div>
            </div>
        </section>
    )
}

export default Card