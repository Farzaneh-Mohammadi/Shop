import React, { useEffect, useState } from "react";
import axios from "axios";

import _ from "lodash";
import Select from "react-select";
import { toast } from "react-toastify";

import { IconContext } from "react-icons";
import { MdBookmarkAdded } from "react-icons/md";
import { MdOutlineBookmarkAdd } from "react-icons/md";

import styles from "./Products.module.css";
// import loading from "../assets/loading.gif";
import { useCart, useCartActions } from "./../context/CartProvider";

const sizeOptions = [
  { value: "", label: "All" },
  { value: "S", label: "S" },
  { value: "M", label: "M" },
  { value: "L", label: "L" },
  { value: "XL", label: "XL" },
];

const sortOptions = [
  { value: "asc", label: "asc" },
  { value: "desc", label: "desc" },
];

function checkInCart(cart, product) {
  return cart.find((c) => c.id === product.id);
}

function checkInSave(save, product) {
  return save.find((c) => c.id === product.id);
}

const Products = () => {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);

  const [value, setValue] = useState("");
  const [sort, setSort] = useState("");

  const [filteredSearchProducts, setFilteredSearchProducts] = useState([]);
  let [query, setQuery] = useState({
    text: "",
  });

  const [saveActive, setSaveActive] = useState(false);
  const toggleSave = () => setSaveActive((prev) => !prev);

  const { cart, save } = useCart();
  const dispatch = useCartActions();

  const searchProductsHandler = (e) => {
    setQuery({ ...query, text: e.target.value });
    let theProducts = products.filter((product) => {
      return product.title.toLowerCase().includes(e.target.value.toLowerCase());
    });

    setFilteredSearchProducts(theProducts);
  };

  const sizeHandler = (selectedOption) => {
    if (selectedOption.value === "") {
      setValue(selectedOption);
      setFilteredSearchProducts([...products]);
    } else {
      let sizeProducts = products.filter(
        (p) => p.size.indexOf(selectedOption.value) >= 0
      );
      setValue(selectedOption);
      setFilteredSearchProducts(sizeProducts);
    }
  };

  const sortHandler = (selectedOption) => {
    if (selectedOption.value === "asc") {
      let ascSort = _.orderBy(products, ["price"], ["asc"]);
      setSort(selectedOption);
      setFilteredSearchProducts(ascSort);
    } else {
      let descSort = _.orderBy(products, ["price"], ["desc"]);
      setSort(selectedOption);
      setFilteredSearchProducts(descSort);
    }
  };

  const addProductHandler = (product) => {
    console.log(product);
    toast.success(`${product.title} added to cart!`);
    dispatch({ type: "ADD_TO_CART", payload: product });
  };

  const saveProduct = (product) => {
    console.log(product);
    toast.success(`${product.title} saved to Save List!`);
    dispatch({ type: "SAVE_PRODUCT", payload: product });
  };

  useEffect(() => {
    setLoading(true);

    const getProducts = async () => {
      const { data } = await axios.get(
        "https://my-json-server.typicode.com/Farzaneh-Mohammadi/json/products"
      );
      setProducts(data);
      setFilteredSearchProducts(data);
    };

    getProducts();

    setLoading(false);
  }, []);

  if (loading)
    return (
      <div>
        <img src={loading} alt="loading" />
        <h1>Loading...</h1>
      </div>
    );

  return (
    <>
      <div className={styles.searchSort}>
        {/* ------------ SEARCH ------------- */}
        <div className={styles.searchContainer}>
          <p>Search: </p>
          <input
            className={styles.searchInp}
            type="text"
            name="text"
            placeholder="search..."
            onChange={searchProductsHandler}
            value={query.text}
          />
        </div>

        <div className={styles.filters}>
          {/* ------------ SIZE ------------- */}
          <div className={styles.sizeContainer}>
            <p>Size: </p>
            <Select
              value={value}
              onChange={sizeHandler}
              options={sizeOptions}
              className={styles.selects}
            />
          </div>


          {/* ------------ SORT BY PRICE ------------- */}
          <div className={styles.sortContainer}>
            <p>Sort By Price: </p>
            <Select value={sort} onChange={sortHandler} options={sortOptions} />
          </div>
        </div>
      </div>

      {/* ------------ PRODUCTS ------------- */}
      <div className={styles.cards}>
        {filteredSearchProducts.map((product) => (
          <div key={product.id} className={styles.card}>






            {/* <button onClick={toggleSave}>  */}
            <button
              onClick={() => saveProduct(product)}
              className={styles.saveBtn}
            >
              {save && checkInSave(save, product) ? (
                <IconContext.Provider value={{ color: "green" }}>
                  <MdBookmarkAdded />
                </IconContext.Provider>
              ) : (
                <MdOutlineBookmarkAdd />
              )}
            </button>
            {/* </button> */}





            <div className={styles.imgAndSave}>
              <img
                src={product.image}
                className={styles.productImg}
                alt="product_image"
              />
            </div>

            <div className={styles.cardDetail}>
              <h3 style={{ color: "#25548D" }}>{product.title}</h3>
              <p>
                {" "}
                <b>price:</b>{" "}
                <span style={{ color: "#25548D" }}> ${product.price} </span>
              </p>
              <br />

              <button
                onClick={() => addProductHandler(product)}
                className={styles.cardBtn}
              >
                {checkInCart(cart, product) ? "In Cart" : "Add to Cart"}
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Products;
