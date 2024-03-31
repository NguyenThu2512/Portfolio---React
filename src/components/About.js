import React from 'react'

function About() {
  return (
    <div id="about" className="section">
        <div className="about-container">
            <div className="about-info">
                <div className="txt-medium">Hello, It's Me</div>
                <div className="txt-large">Nguyen Thi Thu</div>
                <div className="txt-medium">And I'm a Frontend Developer</div>
                <div className="txt-small">I am Thu, a recent graduate in Management Information Systems with a fervent passion for web development. Eager to apply my skill set and knowledge to excel in this domain, I am enthusiastic about contributing to and evolving within a professional environment. I look forward to the opportunity to discuss how my qualifications align with the needs of your esteemed organization.</div>
                <div className='btn-cv'><a href="https://drive.google.com/file/d/1z9EL6i4rY6es9AqipqUyzrKJLfi5faaU/view?usp=drive_link">Watch CV</a></div>
            </div>
            <div className="about-img">
                <img src="images/avatar_o.png" alt="Avatar" />
            </div>
        </div>
          
    </div>
  )
}

export default About
