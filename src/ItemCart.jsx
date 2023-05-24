import React from 'react';
import { useCart } from "react-use-cart";

function ItemCart({props}) {
    const {addItem} = useCart()
  return (
    <div class="col-11 col-md-6 col-lg-3 mx-0 md-4 border ">
        <img src={props.img} class="card-img-top w-50" alt="..."/>
        <div class="card-body">
            <h5 class="card-title">{props.title}</h5>
            <p>{props.price} KGS</p>
            <p class="card-text">{props.desc}</p>
            <button onClick={() => addItem(props)} type='button' class="btn btn-primary">Buy</button>
        </div>
    </div>
  )
}

export default ItemCart