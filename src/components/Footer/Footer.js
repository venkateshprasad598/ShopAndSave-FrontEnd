import React from "react";
import "./Footer.css";
import FooterInfo from "../FooterInfo/FooterInfo";
import FooterBottom from "../FooterBottom/FooterBottom";

const Footer = () => {
  return (
    <div className="footer">
      <hr />
      <a className="footer__backToTopText" href="#">
        <div className="footer__backToTop">Back to top</div>
      </a>

      <div className="footer__socialInfo">
        <div className="footer__Info">
          <FooterInfo
            title="Get to Know Us"
            line1="About Us"
            line2="Careers"
            line3="Press Releases"
            line4="Amazon Cares"
            line5="Gift a Smile"
          />
          <FooterInfo
            title="Connect with Us"
            line1="Facebook"
            line2="Twitter"
            line3="instagram"
          />
          <FooterInfo
            title="Make Money with Us"
            line1="Sell on Amazon"
            line2="Sell under Amazon Accelerator"
            line3="Amazon Global Selling"
            line4="Become an Affiliate"
            line5="Fulfilment by Amazon"
            line6="Adverse Your Products"
            line7="Amazon Pay on Merchants"
          />
          <FooterInfo
            title="Let Us Help You"
            line1="Covid-19 and Amazon"
            line2="Returns Centre"
            line3="100% Purchase Protection"
            line4="Amazon App Download"
            line5="Amazon Assistant Download"
            line6="Your Account"
            line7="Help"
          />
        </div>
        <div className="footer__bottom">
          <FooterBottom />
        </div>
      </div>
    </div>
  );
};
export default Footer;
