import Recat from "react";
import "./FooterInfo.css";
const FooterInfo = ({
  title,
  line1,
  line2,
  line3,
  line4,
  line5,
  line6,
  line7,
}) => {
  return (
    <div className="footer__info">
      <h2 className="footerInfo__title">{title}</h2>
      <a href="#" className="footerInfo__subtitle">
        {line1}
      </a>
      <a href="#" className="footerInfo__subtitle">
        {line2}
      </a>
      <a href="#" className="footerInfo__subtitle">
        {line3}
      </a>
      <a href="#" className="footerInfo__subtitle">
        {line4}
      </a>
      <a href="#" className="footerInfo__subtitle">
        {line5}
      </a>
      <a href="#" className="footerInfo__subtitle">
        {line6}
      </a>
      <a href="#" className="footerInfo__subtitle">
        {line7}
      </a>
    </div>
  );
};
export default FooterInfo;
