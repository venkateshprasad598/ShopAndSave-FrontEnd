import React from "react";
import "./Home.css";
import Product from "../Product/Product";
import Footer from "../Footer/Footer";
const Home = () => {
  return (
    <div className="home">
      <img
        className="home__img"
        src="https://m.media-amazon.com/images/I/91xS6KMUwsL._SX3000_.jpg" //Banner Image
        alt=""
      />

      <div className="home__row">
        <Product
          id={1}
          title="AmazonBasics 139cm (55 inch) 4K Ultra HD Smart LED Fire TV AB55U20PS (Black)"
          image="https://m.media-amazon.com/images/I/61bXjE5ESwS._AC_UY218_.jpg"
          price={42000}
          rating={4}
        />
        <Product
          id={2}
          title="2020 Apple iPad Air with A14 Bionic chip (10.9-inch/27.69 cm, Wi-Fi + Cellular, 64GB) - Green (4th Generation)"
          image="https://m.media-amazon.com/images/I/71qzgEZgSIL._SX679_.jpg"
          price={66999}
          rating={3}
        />
        <Product
          id={3}
          title="MSI GF75 Thin, Intel i7-10750H, 17.3 (43.9 cm) FHD IPS-Level 144Hz Panel Laptop (8GB/512GB)"
          image="https://m.media-amazon.com/images/I/81DR+J7JxkL._AC_SX410_SY308_.jpg"
          price={74990}
          rating={2}
        />
      </div>
      <div className="home__row">
        <Product
          id={7}
          title="LG Ultragear 100cm G-Sync Compatible Curved Ultrawide, 1ms, 144Hz, HDR 10, IPS Gaming Monitor."
          image="https://m.media-amazon.com/images/I/61cFCZayTSL._AC_SL1500_.jpg"
          price={100000}
          rating={5}
        />
      </div>

      <div className="home__row">
        <Product
          id={8}
          title="Lavie Faroe Women's Satchel Handbag"
          image="https://m.media-amazon.com/images/I/81Y4I3U-mDS._AC_UL480_FMwebp_QL65_.jpg"
          price={3000}
          rating={5}
        />
        <Product
          id={5}
          title="Rich Dad Poor Dad: What the Rich Teach Their Kids About Money That the Poor and Middle Class Do Not! "
          image="https://images-eu.ssl-images-amazon.com/images/I/51u2E5fNq8L._SY264_BO1,204,203,200_QL40_FMwebp_.jpg"
          price={500}
          rating={5}
        />
      </div>

      <div className="home__row">
        <Product
          id={4}
          title="TFossil Analogue Women's Watch"
          image="https://m.media-amazon.com/images/I/81uXXtg4hoL._UX425_.jpg"
          price={8310}
          rating={5}
        />
        <Product
          id={7}
          title="Nike revolution 5 Lace-Up Sports Shoes"
          image="https://media.gq.com/photos/60edfcd518480638c840d05b/master/w_2000,h_1333,c_limit/Nike-Air-Zoom-Terra-Kiger-7-shoe.jpg"
          price={4000}
          rating={4}
        />
        <Product
          id={6}
          title="Amazon Brand - Jam & Honey Teddy Bear Soft Toy (100 Cm, Beige)"
          image="https://m.media-amazon.com/images/I/61bIkFkmhDL._AC_UL320_.jpg"
          price={5000}
          rating={3}
        />
      </div>

      <div className="home__row">
        <Product
          id={4}
          title="Toshiba 7 Kg Fully Automatic Front Loading Washing Machine (‎TW-J80S2-IND, ‎White)"
          image="https://images-na.ssl-images-amazon.com/images/I/61I42mnhfTS._SL1500_.jpg"
          price={29999}
          rating={4}
        />
        <Product
          id={6}
          title="Fitspire Whey Gold standard 100% Whey Protein Isolate | No Added Sugar | Zero Cholesterol & Gluten Free."
          image="https://m.media-amazon.com/images/I/61pfIQ1eCgL._AC_UY218_.jpg"
          price={2000}
          rating={5}
        />

        <Product
          id={7}
          title="Fossil Gen 5 Carlyle Stainless Steel Touchscreen Men's Smartwatch with Speaker, Heart Rate, GPS and Smartphone"
          image="https://m.media-amazon.com/images/I/71XWG48C-NL._UX679_.jpg"
          price={21000}
          rating={3}
        />
      </div>
      <Footer />
    </div>
  );
};
export default Home;
