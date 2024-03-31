import React from 'react'

function Skills() {
  return (
    <div id="skills" className="section">
      <div className="skills-container">
        <div className="skills-heading">
          <h1>My Skills</h1>
          <hr className='divider'/>
        </div>
        <div className="skills-list">
          <div className="skills-item">
            <img src="images/html.png" alt="HTML" />
            <span className="html-item">HTML</span>
          </div>
          <div className="skills-item">
            <img src="images/css.png" alt="CSS" />
            <span className="css-item">CSS</span>
          </div>
          <div className="skills-item">
            <img src="images/js.png" alt="CSS" />
            <span className="js-item">JavaScript</span>
          </div>
          <div className="skills-item">
            <img src="images/React.png" alt="CSS" />
            <span className="css-item">React</span>
          </div>
          <div className="skills-item">
            <img src="images/php.png" alt="CSS" />
            <span className="php-item">PHP</span>
          </div>
          <div className="skills-item">
            <img src="images/nextjs.png" alt="CSS" />
            <span className="php-item">NextJS</span>
          </div>
          
        </div>
        

      </div>
    </div>
  )
}

export default Skills
