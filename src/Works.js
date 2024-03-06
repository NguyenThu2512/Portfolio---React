import React from 'react';

const Works = () => {
  return (
    <div id="works" className="section">
      <div className="works-container">
        <div className="works-heading">
          <h1>My Works</h1>
          <hr className='divider'/>
        </div>
        <div className="works-box">
          <div className="works-item">
              <img src="images/works-1.PNG" alt="My works" />
          </div>
          <div className="works-item">
              <img src="images/works-2.PNG" alt="My works" />
          </div>
          <div className="works-item">
              <img src="images/works-3.PNG" alt="My works" />
          </div>
          <div className="works-item">
              <img src="images/works-4.PNG" alt="My works" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Works;