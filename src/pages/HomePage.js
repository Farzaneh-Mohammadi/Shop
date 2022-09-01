import React from "react";
import Layout from "../components/Layout/Layout";
import Products from "../components/Products";
import Slider from "../components/Slider";
import Announcement from "../components/Layout/Announcement";



const HomePage = () => {
  return (
    <div>
            <Announcement />

      <Layout>

        <Slider />
        <Products />
      </Layout>
    </div>
  );
};

export default HomePage;
