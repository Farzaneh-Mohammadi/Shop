import React, { useEffect, useState } from 'react'
import axios from 'axios'

import styles from "./Products.module.css"
import {loading} from "../assets/loading.gif"

const Products = () => {

    const [loading, setLoading] = useState(false);
    const [products, setProducts] = useState([]);

    useEffect(() => {
        setLoading(true)
        axios.get("https://fakestoreapi.com/products/category/women's clothing")
        .then((res) => {
            console.log(res.data);
            setProducts(res.data)
        })
        .catch(e => console.log(e))

        setLoading(false)
    }, [])




  return (
    <div>
        {loading && (
            <div>
            {/* <img src={loading} alt="loading"/> */}
            <h1>Loading...</h1>
            </div>
        )}

<div className={styles.cards}>
{products.map((product) => (
    <div key={product.id} className={styles.card}>
        <div><img src={product.image} className={styles.productImg} /></div>
        <div>
            <h3>{product.title.slice(0, 15)}</h3>
            <p> <b>price:</b> {product.price}</p>
            <br />
            <button className={styles.cardBtn}>Add to Cart</button>
        </div>
    </div>
))}
</div>

    </div>
  )
}

export default Products