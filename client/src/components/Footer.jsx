import React from 'react';

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="container wow fadeIn">
          <div className="row">
            <div className="col-md-12">
              <a href="http://www.nic.in/" target="_blank" rel="noopener noreferrer">
                <img
                  src="/images/nic_logo-big.png"
                  alt="Design By NIC"
                  className="float-lg-left float-md-left mr-3"
                />
              </a>
              <p>
                All efforts have been made to make the information as accurate as possible. Contents
                of this site are owned and maintained by Department of Labour, Govt. of West Bengal.
                National Informatics Centre (NIC) will not be responsible for any loss to any person
                caused by inaccuracy in the information available on this Website. Any discrepancy
                found may be brought to the notice of Department of Labour, Govt. of West Bengal.
                This site is best viewed in Firefox, Chrome.
              </p>
            </div>
          </div>
          <div className="site-count">
            <span className="counter">001,888,267</span>
            <span className="site-counter-text">Site Counter</span>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="container">
            <div className="row">
              <p>
                <a href="#">Disclaimer</a> &nbsp;|&nbsp; <a href="#">FAQ</a> &nbsp;|&nbsp;{' '}
                <a href="#">Screen Reader</a>
              </p>
              <p className="copyright">
                Copyright &copy; <span>Department of Labour</span> - All Rights Reserved
              </p>
            </div>
          </div>
        </div>
      </footer>

      <div className="help-desk">
        <a href="#">
          <img src="/images/help-desk-icon.png" alt="Help Desk" />
        </a>
      </div>
    </>
  );
};

export default Footer;
