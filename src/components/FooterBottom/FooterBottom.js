import React from "react";
import "./FooterBottom.css";

const FooterBottom = () => {
  return (
    <div className="footerBottom">
      <div>
        <img
          className="footerBottom__logo"
          src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt=""
        />
      </div>

      <div className="footerBottom__countries">
        <div className="footerBottom__countriesNames">
          <a href="#" className="footerBottom__countriesName">
            India
          </a>
          <a href="#" className="footerBottom__countriesName">
            Brazil
          </a>
          <a href="#" className="footerBottom__countriesName">
            Canada
          </a>
          <a href="#" className="footerBottom__countriesName">
            China
          </a>
          <a href="#" className="footerBottom__countriesName">
            France
          </a>
          <a href="#" className="footerBottom__countriesName">
            Germany
          </a>
          <a href="#" className="footerBottom__countriesName">
            Italy
          </a>
          <a href="#" className="footerBottom__countriesName">
            Japan
          </a>
          <a href="#" className="footerBottom__countriesName">
            Mexico
          </a>
          <a href="#" className="footerBottom__countriesName">
            Netherlands
          </a>
          <a href="#" className="footerBottom__countriesName">
            Poland
          </a>
          <a href="#" className="footerBottom__countriesName">
            Singapore
          </a>
          <a href="#" className="footerBottom__countriesName">
            Spain
          </a>
          <a href="#" className="footerBottom__countriesName">
            Turkey
          </a>
          <a href="#" className="footerBottom__countriesName">
            United Arab Emirates
          </a>
        </div>

        <div className="footer__copyright">
          <a href="#" className="footer__copyrightName">
            Conditions of Use & Sale
          </a>
          <a href="#" className="footer__copyrightName">
            Privacy Notice
          </a>
          <a href="#" className="footer__copyrightName">
            Interested-Based Ads
          </a>
          <a href="#" className="footer__copyrightName">
            © 1996-2021, Amazon.com, Inc. or its affiliates
          </a>
        </div>
      </div>
    </div>
  );
};
export default FooterBottom;
