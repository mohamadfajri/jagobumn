import React from "react";
import "../../components/Footer/footer.css";

const quickLinks03 = [
  {
    path: "#about",
    display: "Home",
  },
  {
    path: "#",
    display: "Jagobumn",
  },
  {
    path: "#blog",
    display: "Testimonial",
  },
];

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__wrapper">
          <div className="footer__logo">
            <h2>JagoBUMN</h2>
            <p className="description">Website Tempat belajar BUMN 2025</p>

            <p className="small__text description">
              JagoGroup
              -JagoCPNS
              -JagoKedinasan
              -JagoBUMN
            </p>
          </div>

          <div className="footer__quick-links">
            <h3 className="quick__link-title">Information</h3>
            <ul className="quick__links">
              {quickLinks03.map((item, index) => (
                <li className="quick__link-item" key={index}>
                  <a href={item.path}>{item.display}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <p className="copyright">Copyright {year}, All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
