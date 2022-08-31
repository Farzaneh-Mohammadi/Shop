import { Link } from "react-router-dom";
import { useCart, useCartActions } from "../context/CartProvider";
import Layout from "../components/Layout/Layout";
import styles from "./SavePage.module.css";



const SavePage = () => {
  const { save } = useCart();
  const dispatch = useCartActions();

  const removeSaveHandler = (cartItem) => {
    dispatch({ type: "REMOVE_SAVE", payload: cartItem });
  };

  const removeAllHandler = () => {
    dispatch({ type: "REMOVE_ALL_SAVES"});
  };

  

  if (!save.length)
    return (
      <Layout>
        <main className={styles.main}>
          <h2>There is no Product in your Save List</h2>
          <Link
            to="/"
            style={{ textDecoration: "underline", fontSize: "25px" }}
          >
            See Products
          </Link>
        </main>
      </Layout>
    );

  return (
    <Layout>
      <main className={styles.saveProductsContainer}>
        <div className={styles.productsHeader}>
          <h3>
            It is &nbsp;
            <span style={{ textDecoration: "underline" }}>{save.length}</span>
            &nbsp; Item In Your Saves
          </h3>
          <Link to="/" style={{ textDecoration: "underline" }}>
            Continue Shopping
          </Link>
        </div>


        <button  onClick={() => removeAllHandler()} className={styles.removeAllBtn}>Remove All</button>


          <section className={styles.saveList}>
            {save.map((item) => (
              <div key={item.id} className={styles.saveItems}>
                <div >

                    
                  <div>
                    <img
                      className={styles.saveImg}
                      src={item.image}
                      alt="product_image"
                    />
                  </div>
                  <div className={styles.itemInfo}>
                    <h2 style={{ margin: "12px 0", color: "#f76c10", textAlign: "center" }}>
                      <b>{item.title} </b>{" "}
                    </h2>
                  </div>


                  <div >
                    <button  onClick={() => removeSaveHandler(item)} className={styles.saveButton}>remove from saves</button>
                  </div>

                </div>
              </div>
            ))}
          </section>


      </main>
    </Layout>
  );
};

export default SavePage;
