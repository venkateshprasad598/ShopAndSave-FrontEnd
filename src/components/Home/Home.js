import React from "react";
import "./Home.css";
import Product from "../Product/Product";
const Home = () => {
  return (
    <div className="home">
      <img
        className="home__img"
        src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/gateway/placement/launch/TheTomorrowWar/TWAR_2021_GWBleedingHero_FT_COVIDUPDATE_XSite_3000X1200_PV_en-GB._CB665379733_.jpg" //Banner Image
        alt=""
      />

      <div className="home__row">
        <Product
          id={123567}
          title="AmazonBasics 564 L Side-by-Side Door Refrigerator (Silver Steel Finish)"
          image="https://images-na.ssl-images-amazon.com/images/I/71DuofqGR8L._SX679_.jpg"
          price="
          M.R.P.:	₹40.00"
          rating={5}
        />

        <Product
          id={123567}
          title="OnePlus Nord 2 5G (Gray Sierra, 8GB RAM, 128GB Storage)"
          image="https://images-na.ssl-images-amazon.com/images/I/71KVeQql77S._SL1500_.jpg"
          price="29,999"
          rating={5}
        />

        <Product
          id={123567}
          title="HP Pavilion Gaming 10th Gen Intel Core i5 Processor 15.6-inch(39.6 cm) FHD Gaming Laptop."
          image="https://images-na.ssl-images-amazon.com/images/I/611VHOvjkES._SL1080_.jpg"
          price="63,999"
          rating={5}
        />

        <Product
          id={123567}
          title="Toshiba 7 Kg Fully Automatic Front Loading Washing Machine (‎TW-J80S2-IND, ‎White)"
          image="https://images-na.ssl-images-amazon.com/images/I/61I42mnhfTS._SL1500_.jpg"
          price="26,990"
          rating={5}
        />
      </div>

      <div className="home__row">
        <Product
          id={123567}
          title="AmazonBasics 564 L Side-by-Side Door Refrigerator (Silver Steel Finish)"
          image="https://images-na.ssl-images-amazon.com/images/I/71DuofqGR8L._SX679_.jpg"
          price="48,999"
          rating={5}
        />

        <Product
          id={123567}
          title="OnePlus Nord 2 5G (Gray Sierra, 8GB RAM, 128GB Storage)"
          image="https://images-na.ssl-images-amazon.com/images/I/71KVeQql77S._SL1500_.jpg"
          price="29,999"
          rating={5}
        />

        <Product
          id={123567}
          title="HP Pavilion Gaming 10th Gen Intel Core i5 Processor 15.6-inch(39.6 cm) FHD Gaming Laptop."
          image="https://images-na.ssl-images-amazon.com/images/I/611VHOvjkES._SL1080_.jpg"
          price="63,999"
          rating={5}
        />

        <Product
          id={123567}
          title="Toshiba 7 Kg Fully Automatic Front Loading Washing Machine (‎TW-J80S2-IND, ‎White)"
          image="https://images-na.ssl-images-amazon.com/images/I/61I42mnhfTS._SL1500_.jpg"
          price="26,990"
          rating={5}
        />
        <Product
          id={123567}
          title="Toshiba 7 Kg Fully Automatic Front Loading Washing Machine (‎TW-J80S2-IND, ‎White)"
          image="https://images-na.ssl-images-amazon.com/images/I/61I42mnhfTS._SL1500_.jpg"
          price="26,990"
          rating={5}
        />
      </div>
      <div className="home__row">
        <Product
          id={123567}
          title="AmazonBasics 564 L Side-by-Side Door Refrigerator (Silver Steel Finish)"
          image="https://images-na.ssl-images-amazon.com/images/I/71DuofqGR8L._SX679_.jpg"
          price="48,999"
          rating={5}
        />
      </div>
    </div>
  );
};
export default Home;
