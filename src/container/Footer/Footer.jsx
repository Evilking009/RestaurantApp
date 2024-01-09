import React from "react";
import { FooterOverlay, Newsletter } from "../../components";
import { FiFacebook, FiInstagram, FiTwitter } from "react-icons/fi";
import "./Footer.css";
import { images } from "../../constants";

const Footer = () => (
  <div className="app__footer section__padding">
    <FooterOverlay />
    <Newsletter />

    <div className="app__footer-links">
      <div className="app__footer-links_contact">
        <h1 className="app__footer-headtext">Contact Us</h1>
        <p className="p__opensans">
          Old Lane Bungalow, Near Shahrah-E-Faisal, Karachi, 76G
        </p>
        <p className="p__opensans">+92 123 456 78</p>
        <p className="p__opensans">+90 765 432 10</p>
      </div>
      <div className="app__footer-links_logo">
        <img src={images.gericht} alt="logo" />
        <p className="p__opensans">
          "One cannot think well, love well, sleep well, if one has not dined
          well."
        </p>
        <img
          src={images.spoon}
          alt="spoon"
          className="spoon__img"
          style={{ marginTop: 15 }}
        />
        <div className="app__footer-links_icons">
          <FiFacebook />
          <FiTwitter />
          <FiInstagram />
        </div>
      </div>
      <div className="app__footer-links_work">
        <h1 className="app__footer-headtext">Working Hours</h1>
        <p className="p__opensans">Monday-Friday:</p>
        <p className="p__opensans">10:00 am - 4:00 pm</p>
        <p className="p__opensans">Saturday-Sunday:</p>
        <p className="p__opensans">10:00 am - 6:00 pm</p>
      </div>
    </div>

    <div className="footer__copyright">
      <p className="p__opensans">2024 Cheffest. All Rights Reserved</p>
    </div>
  </div>
);

export default Footer;
