import React from "react";
import {Link} from 'react-router-dom';

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Gal1 from "../../../public/images/gal-1.jpg";
import Gal2 from "../../../public/images/gal-2.jpg";
import Gal3 from "../../../public/images/gal-3.jpg";
import Gal4 from "../../../public/images/gal-4.jpg";
import Gal5 from "../../../public/images/gal-5.jpg";
import Gal6 from "../../../public/images/gal-6.jpg";
import "./Gallery.scss";

const gallery = props => {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 2000,
    slidesToShow: 2,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 3800
  };

  return (
    <section className={`gallery`}>
      <Slider {...settings}>
        <Link to="/">
          <figure className="gallery__item">
            <img src={Gal1} alt="House 1" />
          </figure>
          <h3 className='heading-3'>18 Residence</h3>
        </Link>
        <Link to="/">
          <figure className="gallery__item">
            <img src={Gal2} alt="House 2" />
          </figure>
          <h3 className='heading-3'>24 Avenue</h3>
        </Link>
        <Link to="/">
          <figure className="gallery__item">
            <img src={Gal3} alt="House 3" />
          </figure>
          <h3 className='heading-3'>Dee Hills Park, Chester</h3>
        </Link>
        <Link to="/">
          <figure className="gallery__item">
            <img src={Gal4} alt="House 4" />
          </figure>
          <h3 className='heading-3'>Coniston Road, Newtown</h3>
        </Link>
        <Link to="/">
          <figure className="gallery__item">
            <img src={Gal5} alt="House 5" />
          </figure>
          <h3 className='heading-3'>Vicars Cross</h3>
        </Link>
        <Link to="/">
          <figure className="gallery__item">
            <img src={Gal6} alt="House 6" />
          </figure>
          <h3 className='heading-3'>Great Boughton</h3>
        </Link>
      </Slider>
    </section>
  );
};

export default gallery;
