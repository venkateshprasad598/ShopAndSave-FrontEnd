import React from "react";
import "./Promo.css";

const Promo = ({
  title,
  image1,
  image2,
  image3,
  image4,
  bio,
  subtitle1,
  subtitle2,
  subtitle3,
  subtitle4,
  id,
}) => {
  return (
    <div className="promo">
      <div>
        <h2 className="promo__title">{title}</h2>

        <div className="promo_images">
          <div className="promo__image1and2">
            <div>
              <img className="promo__image1" src={image1} alt="" />
              <p className="promo__subtitle">{subtitle1}</p>
            </div>

            <div>
              <img className="promo__image2" src={image2} alt="" />
              <p className="promo__subtitle">{subtitle2}</p>
            </div>
          </div>

          <div className="promo__image3and4">
            <div>
              <img className="promo__image3" src={image3} alt="" />
              <p className="promo__subtitle">{subtitle3}</p>
            </div>

            <div>
              <img className="promo__image4" src={image4} alt="" />
              <p className="promo__subtitle">{subtitle4}</p>
            </div>
          </div>

          <a className="promo__bio" href="#">
            {bio}
          </a>
        </div>
      </div>
    </div>
  );
};
export default Promo;
