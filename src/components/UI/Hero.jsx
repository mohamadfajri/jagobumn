import React from "react";
import "../styles/hero.css";

import heroDarkImg from "../images/hero-img.png";
import lightImg from "../../components/images/light-hero-bg.jpg";

const Hero = ({ theme }) => {
  const handleGetStartedClick = () => {
    window.location.href = "https://www.australia.com";
  };

  const handleDiscoverMoreClick = () => {
    window.location.href = "https://www.akucinta.com";
  };

  return (
    <section className="hero__section" id="home">
      <div className="container">
        <div className="hero__wrapper">
          <div className="hero__content">
            <div>
              <h2>JagoBumn</h2>
              <h2>Website Tempat belajar BUMN 2025</h2>
              <h2 className="highlight">Kumpulan Soal-Soal Dan TryOut BUMN 2025</h2>
            </div>
            <p className="description">
              Sesuai Dengan Kisi Kisi Terbaru 2025 & FR
            </p>

            <div className="hero__btns">
              <button className="primary__btn" onClick={handleGetStartedClick}>
                Order Disini
              </button>
              <button className="secondary__btn" onClick={handleDiscoverMoreClick}>
                WhatsApp Admin
              </button>
            </div>
          </div>

          <div className="hero__img">
            <img
              src={theme === "light-theme" ? lightImg : heroDarkImg}
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
