import React from "react"
import ItemCart from "./ItemCart"
import { data } from "./data"
import { Link } from "react-router-dom"

export const Home = () => {
    return(
        <>
            <h1 className="text-center mt-3">Бардык товарлар</h1>
            <section className="py-4 container">
                <Link to={'/'}>
                 <button>Home</button>
                </Link>
                <Link to={'/card'}>
                    <button>Card</button>
                </Link>
                <div className="row justify-content-center">
                    {
                        data.productsData.map((props, index) => {
                            return(
                                <ItemCart props={props} key={props.id}></ItemCart>
                            )
                        })
                    }
                </div>
              
            </section>
        </>
    )
}