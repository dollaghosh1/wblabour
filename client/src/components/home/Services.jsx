import React from 'react';

const Services = () => {
  return (
    <section className="services">
      <div className="container">
        <div className="row services-area">
          <div className="col-md-3 services-box">
            <div
              className="media wow bounceInLeft"
              style={{ visibility: 'visible', animationName: 'bounceIn' }}
            >
              <img
                src="/images/eodb_icon.png"
                alt="Ease of Doing Business"
                className="img-fluid"
              />
              <div className="media-body">
                <h3>Ease of Doing Business</h3>
                <p>Lorem Ipsum is simply dummy text of the industry.</p>
                <a href="#">More &gt;&gt;</a>
              </div>
            </div>
          </div>

          <div className="col-md-3 services-box">
            <div
              className="media wow bounceInLeft"
              style={{ visibility: 'visible', animationName: 'bounceIn' }}
            >
              <img
                src="/images/inspection_icon.png"
                alt="EODB Inspection"
                className="img-fluid"
              />
              <div className="media-body">
                <h3>EODB Inspection</h3>
                <p>Lorem Ipsum is simply dummy text of the industry.</p>
                <a href="#">More &gt;&gt;</a>
              </div>
            </div>
          </div>
          <div className="col-md-3 services-box">
            <div
              className="media wow bounceInLeft"
              style={{ visibility: 'visible', animationName: 'bounceIn' }}
            >
              <img
                src="/images/swo_icon.png"
                alt="Online Single Window"
                className="img-fluid"
              />
              <div className="media-body">
                <h3>Online Single Window</h3>
                <p>Lorem Ipsum is simply dummy text of the industry.</p>
                <a href="#" className="blink_me swo_btm">
                  Click here to Login &gt;&gt;
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-3 services-box">
            <div
              className="media wow bounceInLeft"
              style={{ visibility: 'visible', animationName: 'bounceIn' }}
            >
              <img
                src="/images/publication_icon.png"
                alt="Online Publication"
                className="img-fluid"
              />
              <div className="media-body">
                <h3>Online Publication</h3>
                <p>Lorem Ipsum is simply dummy text of the industry.</p>
                <a href="#">More &gt;&gt;</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
