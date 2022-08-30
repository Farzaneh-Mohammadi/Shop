import React from "react";
import styles from "./Footer.module.css";

import { BsTelephoneFill } from "react-icons/bs";
import { SiGmail } from "react-icons/si";
import map from "../../assets/map.jpg"


const Footer = () => {

  return (
    <footer >

<div className={styles.footerContainer}>
<section className={styles.first}>
  <h2>DIGI</h2>
<p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Vitae semper quis
        lectus nulla at volutpat diam. Sagittis orci a scelerisque purus semper
        eget duis at. Iaculis eu non diam phasellus vestibulum lorem sed risus
        ultricies. Adipiscing at in tellus integer.
      </p>
</section>


<div className={styles.twothree}>
<section className={styles.second}>

  <ul>
  <h3>Services</h3>
    <li>FAQ</li>
    <li>Term Of Use</li>
    <li>Privacy</li>
    <li>Report Bug</li>
  </ul>
</section>


<section className={styles.third}>
  <img src={map} alt="map"/>


  <p> <BsTelephoneFill /> &nbsp; 0913 123 45 99</p>
  <p> <SiGmail /> &nbsp; digi@gmail.com</p>
</section>
</div>


</div>



      <section className={styles.footerText}>
        &copy; All Rights Reserved | Farzaneh Mohammadi
      </section>


    </footer>
  );
};

export default Footer;
