import React from "react";
import "./Home.css";
import Promo from "../Promo/Promo";
import Product from "../Product/Product";
import SignIn from "../SignInPage/SignIn";
import Footer from "../Footer/Footer";
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
        {/* <div className="signIn__block">
          <SignIn title="Sign in for your best experience" />
          <img className="home__giftCard" />
        </div> */}

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
      </div>

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
          title="LG Ultragear 100cm G-Sync Compatible Curved Ultrawide, 1ms, 144Hz, HDR 10, IPS Gaming Monitor."
          image="https://www.mwave.com.au/images/400/AC21477.jpg"
          price={100000}
          rating={5}
        />
        <Product
          id={6}
          title="Amazon Brand - Jam & Honey Teddy Bear Soft Toy (100 Cm, Beige)"
          image="https://m.media-amazon.com/images/I/61bIkFkmhDL._AC_UL320_.jpg"
          price={5000}
          rating={4}
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
          rating={5}
        />

        <Product
          id={8}
          title="Lavie Faroe Women's Satchel Handbag"
          image="https://m.media-amazon.com/images/I/81Y4I3U-mDS._AC_UL480_FMwebp_QL65_.jpg"
          price={3000}
          rating={5}
        />
      </div>
      <img
        className="home__bottomImage"
        src="https://images-eu.ssl-images-amazon.com/images/G/02/SBP/2021/Evergreen_Homepage/AMA026_Separate_SMB_Storefront_Request_Editorial_1150x323_Blue_ST3._CB644987670_.jpg"
        alt=""
      />

      <Footer />
    </div>
  );
};
export default Home;
