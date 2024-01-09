import React from 'react';

function Contact() {
  return (
    <div className="container mt-5">
      <h1>Contact Us</h1>

      <div className="row">
        <div className="col-md-6">
          <p>
          Welcome to our Contact Us page! We value your feedback, inquiries, and suggestions. Feel free to reach out to us using the information below.
          Have a question about our products or services? Our dedicated customer support team is here to assist you. Contact us via email or phone for prompt assistance.
          </p>
        </div>

        <div className="col-md-6">
          <form>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">Your Name</label>
              <input type="text" className="form-control" id="name" placeholder="Enter your name" />
            </div>

            <div className="mb-3">
              <label htmlFor="email" className="form-label">Your Email</label>
              <input type="email" className="form-control" id="email" placeholder="Enter your email" />
            </div>

            <div className="mb-3">
              <label htmlFor="message" className="form-label">Your Message</label>
              <textarea className="form-control" id="message" rows="4" placeholder="Type your message"></textarea>
            </div>

            <button type="submit" className="btn btn-primary">Submit</button>
          </form>
        </div>
      </div>

      
      <div className="mt-5">
        <h3>Connect with Us on Social Media</h3>
        <p>Follow us on LinkedIn and GitHub for updates and more:</p>
        
        <div>
          <a href="https://www.linkedin.com/in/esra-abanoglu-a39293251/" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
        </div>
        
        <div>
          <a href="https://github.com/esraabanoglu5454" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contact;