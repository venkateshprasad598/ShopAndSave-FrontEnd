import React from "react";
import "./Footer.css";
import FooterInfo from "../FooterInfo/FooterInfo";

const Footer = () => {
  return (
    <div className="footer">
      <hr />
      <a className="footer__backToTopText" href="#">
        <div className="footer__backToTop">Back to top</div>
      </a>

      <div className="footer__info">
        <FooterInfo
          title="Get to Know Us"
          line1="About Us"
          line2="Careers"
          line3="Press Releases"
          line4="Amazon Cares"
          line5="Gift a Smile"
        />
      </div>
    </div>
  );
};
export default Footer;
