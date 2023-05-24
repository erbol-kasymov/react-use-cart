import React from "react"
import ItemCart from "./ItemCart"
import { data } from "./data"

export const Home = () => {
    return(
        <>
            <h1 className="text-center mt-3">Бардык товарлар</h1>
            <section className="py-4 container">
                <div className="row justify-content-center">
                    {
                        data.productsData.map((item, index) => {
                            return(
                                <ItemCart props={item} key={index}></ItemCart>
                            )
                        })
                    }
                </div>
            </section>
        </>
    )
}