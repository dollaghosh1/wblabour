import React from 'react';

const Activities = () => {
  return (
    <section className="activities">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <ul>
              <li className="lc">
                <a href="#">
                  <img
                    src="/images/lc_icon.png"
                    alt="LABOUR COMMISSIONERATE"
                    className="img-fluid"
                  />
                  <span>LABOUR COMMISSIONERATE</span>
                </a>
              </li>
              <li className="employment">
                <a href="#">
                  <img
                    src="/images/employment_icon.png"
                    alt="EMPLOYMENT"
                    className="img-fluid"
                  />
                  <span>EMPLOYMENT</span>
                </a>
              </li>
              <li className="factories">
                <a href="#">
                  <img
                    src="/images/factories_icon.png"
                    alt="FACTORIES"
                    className="img-fluid"
                  />
                  <span>FACTORIES</span>
                </a>
              </li>
              <li className="boilers">
                <a href="#">
                  <img
                    src="/images/boilers_icon.png"
                    alt="BOILERS"
                    className="img-fluid"
                  />
                  <span>BOILERS</span>
                </a>
              </li>
              <li className="boards">
                <a href="#">
                  <img
                    src="/images/boards_icon.png"
                    alt="BOARDS"
                    className="img-fluid"
                  />
                  <span>BOARDS</span>
                </a>
              </li>
              <li className="courts">
                <a href="#">
                  <img
                    src="/images/courts_icon.png"
                    alt="INDUSTRIAL TRIBUNALS & LABOUR COURTS"
                    className="img-fluid"
                  />
                  <span>INDUSTRIAL TRIBUNALS & LABOUR COURTS</span>
                </a>
              </li>
              <li className="esi">
                <a href="esi/esi_index.html">
                  <img
                    src="/images/esi_icon.png"
                    alt="ESI (MB) SCHEME"
                    className="img-fluid"
                  />
                  <span>ESI (MB)<br />SCHEME</span>
                </a>
              </li>
              <li className="compensation">
                <a href="#">
                  <img
                    src="/images/compensation_icon.png"
                    alt="EMPLOYEES' COMPENSATION"
                    className="img-fluid"
                  />
                  <span>EMPLOYEES' COMPENSATION</span>
                </a>
              </li>
              <li className="sli">
                <a href="sli/sli_index.html">
                  <img
                    src="/images/sli_icon.png"
                    alt="STATE LABOUR INSTITUTE"
                    className="img-fluid"
                  />
                  <span>STATE LABOUR INSTITUTE</span>
                </a>
              </li>
              <li className="bmssy">
                <a href="https://bmssy.wblabour.gov.in/" target="_blank" rel="noopener noreferrer">
                  <img
                    src="/images/bmssy_icon.png"
                    alt="Bina Mulya Samajik Suraksha Yojana"
                    className="img-fluid"
                  />
                  <span>BMSSY</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Activities;
