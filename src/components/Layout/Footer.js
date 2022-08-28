import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.footerContainer}>
      <p className={styles.footerText}>
        {" "}
        &copy; All Rights Reserved | Farzaneh Mohammadi
      </p>
    </div>
  );
};

export default Footer;
