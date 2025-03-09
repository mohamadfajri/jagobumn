import React from "react";
import "../../components/styles/blog.css";

import videoImg from "../../components/images/video.png";
import articleImg from "../../components/images/article.png";
import caseStudy from "../../components/images/case-study.png";

const blogData = [
  {
    imgUrl: videoImg,
    title: "Soal yang Selalu Update",
    desc: "Kami menyediakan soal yang relevan dan selalu diperbarui sesuai dengan format terbaru rekrutmen BUMN, sehingga kamu belajar dengan bahan terkini.",
    linkUrl: "#",
  },
  {
    imgUrl: articleImg,
    title: "Article",
    desc: "Setiap soal dilengkapi pembahasan langkah demi langkah yang membantu kamu memahami cara menjawab dengan tepat dan efisien.",
    linkUrl: "#",
  },
  {
    imgUrl: caseStudy,
    title: "Dibuat Oleh Team Profesional",
    desc: "Soal Dibuat Oleh Team Dari jagoBumn",
    linkUrl: "#",
  },
];

const Blog = () => {
  return (
    <section id="blog" className="blog">
      <div className="container">
        <div className="blog__top-content">
          <h2>
            Kenapa Harus Beli Di 
            <span className="highlight"> JagoBumn ?</span>
          </h2>
        </div>

        <div className="blog__wrapper">
          {blogData.map((item, index) => (
            <div className="blog__item" key={index}>
              <h2>{item.title}</h2>
              <div className="blog__img">
                <img src={item.imgUrl} alt="video" />
              </div>
              <p className="description blog__desc">{item.desc}</p>
              <div>
                <a href={item.linkUrl} className="learn__more">
                  <i class="ri-arrow-right-line"></i>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
