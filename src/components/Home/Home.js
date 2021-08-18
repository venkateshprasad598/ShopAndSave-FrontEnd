import React from "react";
import "./Home.css";
import Product from "../Product/Product";
const Home = () => {
  return (
    <div className="home">
      <img
        className="home__img"
        src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_FT_COVIDUPDATE_XSite_3000x1200_PV_en-GB._CB408004052_.jpg" //Banner Image
        alt=""
      />

      <Product
        id={123567}
        title="My second project is gonna be amazon, let's get started"
        image="https://image01.oneplus.net/shop/202103/15/1-M00-22-09-rB8bwmBO1G-AO6MJAAChKvlT19g553.png"
        price="80"
        rating={5}
      />
    </div>
  );
};
export default Home;
