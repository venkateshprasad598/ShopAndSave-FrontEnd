import React from "react";
import "./Home.css";
import Promo from "../Promo/Promo";
import Product from "../Product/Product";
import SignIn from "../SignInPage/SignIn";
const Home = () => {
  return (
    <div className="home">
      <img
        className="home__img"
        src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/gateway/placement/launch/TheTomorrowWar/TWAR_2021_GWBleedingHero_FT_COVIDUPDATE_XSite_3000X1200_PV_en-GB._CB665379733_.jpg" //Banner Image
        alt=""
      />

      <div className="home__row">
        <Promo
          title="Top picks for your home"
          image1="https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B08RDL6H79._SY116_CB667322346_.jpg"
          subtitle1="ACs"
          image2="https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B08345R1ZW._SY116_CB667322346_.jpg"
          subtitle2="Refrigerators"
          image3="https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B07G5J5FYP._SY116_CB667322346_.jpg"
          subtitle3="Microwaves"
          image4="https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/186x116---wm._SY116_CB667322346_.jpg"
          subtitle4="Washing machines"
          bio="See more"
        />
        <Promo
          title="Styles for Women | Up to 70% off"
          image1="https://images-eu.ssl-images-amazon.com/images/G/31/img21/Fashion/Event/Gateway/WRS-Jun/PC_QC_186/Comp-186/5-min._SY116_CB666463598_.jpg"
          subtitle1="Women's Clothing"
          image2="https://images-eu.ssl-images-amazon.com/images/G/31/img21/Fashion/Event/Gateway/WRS-Jun/PC_QC_186/Comp-186/6-min._SY116_CB666463598_.jpg"
          subtitle2="Footwear+Handbags"
          image3="https://images-eu.ssl-images-amazon.com/images/G/31/img21/Fashion/Event/Gateway/WRS-Jun/PC_QC_186/Comp-186/8-min._SY116_CB666463598_.jpg"
          subtitle3="Watches"
          image4="https://images-eu.ssl-images-amazon.com/images/G/31/img21/Fashion/Event/Gateway/WRS-Jun/PC_QC_186/Comp-186/7-min._SY116_CB666463598_.jpg"
          subtitle4="Fashion Jewellery"
          bio="End of Season Sale"
        />
        <Promo
          title="Style for Men | Up to 70% off"
          image1="https://images-eu.ssl-images-amazon.com/images/G/31/img21/Fashion/Event/Gateway/WRS-Jun/PC_QC_186/Comp-186/1-min._SY116_CB666463598_.jpg"
          subtitle1="Clothing"
          image2="https://images-eu.ssl-images-amazon.com/images/G/31/img21/Fashion/Event/Gateway/WRS-Jun/PC_QC_186/Comp-186/2-min._SY116_CB666463598_.jpg"
          subtitle2="Footwear"
          image3="https://images-eu.ssl-images-amazon.com/images/G/31/img21/Fashion/Event/Gateway/WRS-Jun/PC_QC_186/Comp-186/4-min._SY116_CB666463598_.jpg"
          subtitle3="Watches"
          image4="https://images-eu.ssl-images-amazon.com/images/G/31/img21/Fashion/Event/Gateway/WRS-Jun/PC_QC_186/Comp-186/3-min._SY116_CB666463598_.jpg"
          subtitle4="Bags & Luggage"
          bio="End of Season Sale"
        />

        <div className="signIn__block">
          <SignIn title="Sign in for your best experience" />
          <img className="home__giftCard" />
        </div>
      </div>

      <div className="home__row">
        <Product
          id={1}
          title="AmazonBasics 564 L Side-by-Side Door Refrigerator (Silver Steel Finish)"
          image="https://images-na.ssl-images-amazon.com/images/I/71DuofqGR8L._SX679_.jpg"
          price={35000}
          rating={5}
        />

        <Product
          id={2}
          title="OnePlus Nord 2 5G (Gray Sierra, 8GB RAM, 128GB Storage)"
          image="https://images-na.ssl-images-amazon.com/images/I/71KVeQql77S._SL1500_.jpg"
          price={29999}
          rating={5}
        />

        <Product
          id={3}
          title="HP Pavilion Gaming 10th Gen Intel Core i5 Processor 15.6-inch(39.6 cm) FHD Gaming Laptop."
          image="https://images-na.ssl-images-amazon.com/images/I/611VHOvjkES._SL1080_.jpg"
          price={63999}
          rating={5}
        />

        <Product
          id={4}
          title="Toshiba 7 Kg Fully Automatic Front Loading Washing Machine (‎TW-J80S2-IND, ‎White)"
          image="https://images-na.ssl-images-amazon.com/images/I/61I42mnhfTS._SL1500_.jpg"
          price={63999}
          rating={5}
        />
      </div>

      <div className="home__row">
        <Product
          id={5}
          title="AmazonBasics 564 L Side-by-Side Door Refrigerator (Silver Steel Finish)"
          image="https://images-na.ssl-images-amazon.com/images/I/71DuofqGR8L._SX679_.jpg"
          price={5000}
          rating={5}
        />

        <Product
          id={6}
          title="OnePlus Nord 2 5G (Gray Sierra, 8GB RAM, 128GB Storage)"
          image="https://images-na.ssl-images-amazon.com/images/I/71KVeQql77S._SL1500_.jpg"
          price={5000}
          rating={5}
        />

        <Product
          id={7}
          title="HP Pavilion Gaming 10th Gen Intel Core i5 Processor 15.6-inch(39.6 cm) FHD Gaming Laptop."
          image="https://images-na.ssl-images-amazon.com/images/I/611VHOvjkES._SL1080_.jpg"
          price={5000}
          rating={5}
        />

        <Product
          id={8}
          title="Toshiba 7 Kg Fully Automatic Front Loading Washing Machine (‎TW-J80S2-IND, ‎White)"
          image="https://images-na.ssl-images-amazon.com/images/I/61I42mnhfTS._SL1500_.jpg"
          price={5000}
          rating={5}
        />
      </div>
    </div>
  );
};
export default Home;
