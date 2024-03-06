import React,{useState} from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
});

const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
};


  return (
    <div id="contact" className="section">
      <div className="contact-container">
        <div className="contact-info">
          <h2>Contact Info</h2>
          <div>
            <i class="fab fa-github"></i>
            <a href="https://github.com/NguyenThu2512?tab=repositories">Github</a>
          </div>
          <div>
            <i class="fas fa-envelope"></i>
            <a href="#">nguyenthithu25122001@gmail.com</a>
          </div>
          <div>
            <i class="fas fa-phone"></i>
            <a href="#">0326549231</a>
          </div>
        </div>
        <div className="contact-form-container">
            <h2>Contact me</h2>
            <form  className="contact-form">
                <div className="form-group">
                    <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder='Full Name'
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder='Email'
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <textarea
                        id="message"
                        name="message"
                        placeholder='Message'
                        value={formData.message}
                        onChange={handleChange}
                        required
                    ></textarea>
                </div>
                <button type="submit">Send</button>
            </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;