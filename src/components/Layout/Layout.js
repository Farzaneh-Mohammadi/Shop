import React from "react";
import Announcement from "./Announcement";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <div>
      {/* <Announcement /> */}
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
