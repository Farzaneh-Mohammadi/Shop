import React from "react";
import Layout from "../components/Layout/Layout";
import Products from "../components/Products";
import Slider from "../components/Slider";

const HomePage = () => {
  return (
    <div>
      <Layout>
        <Slider />
        <Products />
      </Layout>
    </div>
  );
};

export default HomePage;
