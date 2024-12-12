import React from 'react';
import Slider from 'react-slick';

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="others-links">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <Slider {...settings}>
              <div className="item">
                <a href="http://www.digitalindia.gov.in/" target="_blank" rel="noopener noreferrer">
                  <img src="/images/digital_india_logo.jpg" alt="Digital India" />
                </a>
              </div>
              <div className="item">
                <a href="https://www.mygov.in/" target="_blank" rel="noopener noreferrer">
                  <img src="/images/my_gov_logo.jpg" alt="My Gov" />
                </a>
              </div>
              <div className="item">
                <a href="https://wb.gov.in/" target="_blank" rel="noopener noreferrer">
                  <img src="/images/egiye_bengal_logo.jpg" alt="Egiye Bengal" />
                </a>
              </div>
              <div className="item">
                <a href="https://www.wbtourismgov.in/" target="_blank" rel="noopener noreferrer">
                  <img src="/images/bengal_logo.jpg" alt="Bengal Tourism" />
                </a>
              </div>
              <div className="item">
                <a href="http://wbidc.com/" target="_blank" rel="noopener noreferrer">
                  <img src="/images/wbidc.jpg" alt="WBIDC" />
                </a>
              </div>
              <div className="item">
                <a href="https://wblabour.gov.in/" target="_blank" rel="noopener noreferrer">
                  <img src="/images/wblabour.jpg" alt="WB Labour" />
                </a>
              </div>
              <div className="item">
                <a href="http://wbfin.nic.in/" target="_blank" rel="noopener noreferrer">
                  <img src="/images/finance.jpg" alt="Finance" />
                </a>
              </div>
              <div className="item">
                <a href="https://bmssy.wblabour.gov.in/" target="_blank" rel="noopener noreferrer">
                  <img src="/images/ssy.jpg" alt="BMSSY" />
                </a>
              </div>
              <div className="item">
                <a href="https://employmentbankwb.gov.in/" target="_blank" rel="noopener noreferrer">
                  <img src="/images/employment-bank.jpg" alt="Employment Bank" />
                </a>
              </div>
              <div className="item">
                <a href="https://www.ncs.gov.in/" target="_blank" rel="noopener noreferrer">
                  <img src="/images/national-carrer-service.jpg" alt="National Career Service" />
                </a>
              </div>
              <div className="item">
                <a href="https://silpasathi.in/" target="_blank" rel="noopener noreferrer">
                  <img src="/images/silpasathi.png" alt="Silpasathi" />
                </a>
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Carousel;
