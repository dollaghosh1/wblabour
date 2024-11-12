import React from 'react';

const NewsTicker = () => {
  return (
    <div className="news-ticker-box">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="news-ticker">
              <marquee width="100%" direction="left" height="40px">
                <strong>Circular :</strong> This is a sample scrolling text that
                scrolls text to the left. |{' '}
                <strong>Notifications :</strong> This is a sample scrolling text
                that scrolls text to the left.
              </marquee>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsTicker;
