import React from "react";
import Slider from "react-slick";
import "../../components/styles/testimonials.css";

import ava01 from "../../components/images/ava-1.jpg";
import ava02 from "../../components/images/ava-2.jpg";
import ava03 from "../../components/images/ava-3.jpg";

const Testimonials = () => {
  const settings = {
    dots: false,
    infinite: true,
    Speed: 1000,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipeToSlide: true,
  };
  return (
    <section>
      <div className="container">
        <div className="slider__content-top">
          <h6 className="subtitle">Testimonials</h6>
          <h2>
            Dari Pengguna yang Sudah Membeli 
            <span className="highlight">Paket Soal JAGOBUMN</span>
          </h2>
        </div>

        <div className="slider__wrapper">
          <Slider {...settings}>
            <div className="slider__item">
              <p className="description">
                Saya Tau Soal Ini dari Mimin BUMN, Paket Soalnya Membantu Sekali Proses Belajar BUMN
              </p>

              <div className="customer__details">
                <div className="customer__img">
                  <img src={ava01} alt="" />
                </div>
                <div>
                  <h5 className="customer__name">M Zidni Azaki</h5>
                  <p className="description">S1- Hukum</p>
                </div>
              </div>
            </div>

            <div className="slider__item">
              <p className="description">
                Terimakasih JagoBumn Materi Materi Dan soal soalnya bisa saya gunakan untuk Persiapan RBB BUMN, Semoga Sukses Team JagoBumn
              </p>

              <div className="customer__details">
                <div className="customer__img">
                  <img src={ava02} alt="" />
                </div>
                <div>
                  <h5 className="customer__name">Indah</h5>
                  <p className="description">S-1 Psikologi</p>
                </div>
              </div>
            </div>

            <div className="slider__item">
              <p className="description">
                Platfrom Penyedia Soal Soal BUMN Terbaik Yang Pernah saya Beli , Soal Soal Up to date dan penjelasan Lengkap
              </p>

              <div className="customer__details">
                <div className="customer__img">
                  <img src={ava03} alt="" />
                </div>
                <div>
                  <h5 className="customer__name">Putri Sabilla</h5>
                  <p className="description">S1- Management</p>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
