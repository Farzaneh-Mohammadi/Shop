import React from "react";
import { Link } from "react-router-dom";
import { FiTrash2 } from "react-icons/fi";

import { useCart } from "../context/CartProvider";
import Layout from "../components/Layout/Layout";
import styles from "./CartPage.module.css";
import { useCartActions } from './../context/CartProvider';

const CartPage = () => {
  const { cart, total } = useCart();
  const dispatch = useCartActions()



  const incHandler = (cartItem) => {
dispatch({type : "ADD_TO_CART", payload: cartItem})
  }

  const decHandler = (cartItem) => {
    dispatch({type : "DECREMENT_PRODUCT", payload: cartItem})
      }

  if (!cart.length)
    return (
      <Layout>
        <main className={styles.main} >
          <h2>There is no Product in your cart</h2>
          <Link to="/"  style={{textDecoration: "underline", fontSize: "25px"}}>See Products</Link>
        </main>
      </Layout>
    );
    
  return (
    <Layout>

      <main className={styles.cartProductsContainer}>

      <div className={styles.productsHeader}>
        <h3>It is &nbsp; <span style={{textDecoration: "underline"}}>{cart.length}</span>  &nbsp; Item In Your Bag</h3>
        <Link to="/" style={{textDecoration: "underline"}}>Continue Shopping</Link>
      </div>

        {/* <div className={styles.LeftSectionTitles}>
          <p>Image</p>
          <p>Details</p>
          <p style={{ marginLeft: "8rem" }}>Price</p>
          <p>Quantity</p>
          <p>Total Price</p>
        </div>
 */}

        <div className={styles.sections}>
          <section className={styles.LeftSection}>
            {cart.map((item) => (
              <div key={item.id}>
                <div className={styles.cartItemMap}>
                  <div>
                    <img
                      className={styles.cartImg}
                      src={item.image}
                      alt="product_image"
                    />
                  </div>
                  <div>
                    <h3 style={{ marginBottom: "12px" }}>
                      <b>{item.title} </b>{" "}
                    </h3>

<br />
                    <p><b>details:</b></p>
                    <p>
                     Price:  ${item.price}
                    </p>

                    <p>
                      Size:  {item.size}
                    </p>

                  </div>

                  <div className={styles.cartButtons}>
                    <button  onClick={() => decHandler(item)}   className={`${styles.button}  ${item.quantity === 1 ? styles.remove : null}`}>
                    {item.quantity > 1 ? "-" : <FiTrash2 />}
                    </button>
                    <button>{item.quantity}</button>
                    <button onClick={() => incHandler(item)}>+</button>
                  </div>


                  <p>
                    {" "}
                    <b>Total Price: </b> ${(item.price * item.quantity)}
                  </p>
                </div>
              </div>
            ))}
          </section>

          <section className={styles.rightSection}>
            <h2>Cart Summery</h2>
            <br />
            <p style={{fontSize: "18px"}}>
              <b> Total Price({cart.length} item): </b>
               ${total}
               </p>
               <br />
               <Link to="/checkout">
               <button className={styles.checkoutBtn}>Checkout</button>
               </Link>
          </section>


        </div>
      </main>
    </Layout>
  );
};

export default CartPage;
