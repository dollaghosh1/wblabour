import React from 'react';

const Statistic = () => {
  return (
    <section className="statistic">
      <div className="container">
        <div className="row">
          
          <div className="col-md-2 statistic-box-title">
            <h3>Labour Department Statistics at a Glance</h3>
          </div>

          
          <div className="col-md-2 statistic-box">
            <div className="count-box">
              <span className="counter">7101</span>
              <p className="count-text">
                Principal Employees <br /> Under CLRA
              </p>
            </div>
          </div>

         
          <div className="col-md-2 statistic-box">
            <div className="count-box">
              <span className="counter">2004</span>
              <p className="count-text">
                Transport Workers <br /> Beneficiary Regn
              </p>
            </div>
          </div>

         
          <div className="col-md-2 statistic-box">
            <div className="count-box">
              <span className="counter">12245</span>
              <p className="count-text">Domestic workers trained</p>
            </div>
          </div>

         
          <div className="col-md-2 statistic-box">
            <div className="count-box">
              <span className="counter">17803</span>
              <p className="count-text">
                Registration of <br /> Shops & Establishment
              </p>
            </div>
          </div>

          
          <div className="col-md-2 statistic-box">
            <div className="count-box">
              <span className="counter">7101</span>
              <p className="count-text">
                Renewal <br /> Economiser
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Statistic;
