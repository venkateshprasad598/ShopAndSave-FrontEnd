import React from "react";
import "./Home.css";
import Product from "../Product/Product";
const Home = () => {
  return (
    <div className="home">
      <img
        className="home__img"
        src="https://images-eu.ssl-images-amazon.com/images/G/31/img19/AmazonPay/Avatar/HeroPC_3000x1200_SVA._CB667240774_.jpg" //Banner Image
        alt=""
      />

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
          title="My second project is gonna be amazon, let's get started"
          image="https://image01.oneplus.net/shop/202103/15/1-M00-22-09-rB8bwmBO1G-AO6MJAAChKvlT19g553.png"
          price="80"
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
          title="My second project let's get started."
          image="https://image01.oneplus.net/shop/202103/15/1-M00-22-09-rB8bwmBO1G-AO6MJAAChKvlT19g553.png"
          price="80"
          rating={5}
        />

        <Product
          id={123567}
          title="My second project is gonna be amazon, let's get started"
          image="https://image01.oneplus.net/shop/202103/15/1-M00-22-09-rB8bwmBO1G-AO6MJAAChKvlT19g553.png"
          price="80"
          rating={5}
        />

        <Product
          id={123567}
          title="My second project is gonna be amazon, let's get started"
          image="https://image01.oneplus.net/shop/202103/15/1-M00-22-09-rB8bwmBO1G-AO6MJAAChKvlT19g553.png"
          price="80"
          rating={5}
        />
      </div>

      <div className="home__row">
        <Product
          id={123567}
          title="My second project let's get started."
          image="https://images.samsung.com/is/image/samsung/in-rf9500kf-akg-rf28n9780sg-tl-frontblack-107074192?$720_576_PNG$"
          price="80"
          rating={5}
        />
      </div>
    </div>
  );
};
export default Home;
