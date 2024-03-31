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
              <a href="https://github.com/NguyenThu2512/My_React_Ecommerce_Project/tree/master"><img src="images/works-4.PNG" alt="My works" /></a>
          </div>
          <div className="works-item">
              <a href="https://github.com/NguyenThu2512/TKHOSPITAL"><img src="images/works-1.PNG" alt="My works" /></a>
          </div>
          <div className="works-item">
              <a href="https://github.com/NguyenThu2512/Demo-1"><img src="images/works-2.PNG" alt="My works" /></a>
          </div>
          <div className="works-item">
              <a href="https://github.com/NguyenThu2512/Demo-2"><img src="images/works-3.PNG" alt="My works" /></a>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Works;