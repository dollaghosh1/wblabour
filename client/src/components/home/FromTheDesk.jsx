import React from 'react';

const FromTheDesk = () => {
  return (
    <section className="features">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h2>
              <img
                src="/images/desk_icon.jpg"
                alt=""
                style={{ width: '30px' }}
              />{' '}
              From The Desk Of
            </h2>
          </div>

          <div className="col-md-8">
            <div className="desk">
              <div className="media">
                <img
                  src="/images/minister-picture.jpg"
                  alt="Minister"
                  className="img-fluid"
                />
                <div className="media-body">
                  <h5>Sri Becharam Manna</h5>
                  <p>
                    <strong>Hon'ble Minister of State</strong>
                  </p>
                  <p>Labour Department</p>
                  <p>Government of West Bengal</p>
                </div>
              </div>

              <div className="media">
                <img
                  src="/images/profile-picture.png"
                  alt="Principal Secretary"
                  className="img-fluid"
                />
                <div className="media-body">
                  <h5>Sri Barun Kumar Ray, IAS</h5>
                  <p>
                    <strong>Principal Secretary</strong>
                  </p>
                  <p>Labour Department</p>
                  <p>Government of West Bengal</p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <a href="#">
              <div className="training-box">
                <div className="d-flex">
                  <img
                    src="/images/training_img.jpg"
                    alt="Training"
                    className="img-fluid"
                  />
                  <div>
                    <h5 className="fw-bold">
                      <span className="blink_me">
                        Training on Compassionate Appointment
                      </span>
                      <small className="text-muted">
                        <img src="/images/newicon.gif" alt="New" />
                      </small>
                    </h5>
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FromTheDesk;
