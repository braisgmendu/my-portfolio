export default function Contact() {
    return (
      <section id="Contact" className="contact-section">
        <div>
          <p className="sub-title">Get In Touch</p>
          <h2>Contact Me</h2>
          <p className="text-lg">
            texto
          </p>
        </div>
        <form className="contact-form-container">
          <div className="container">
            <label htmlFor="firs-name" className="contact-label">
              <span className="text-md">First Name</span>
              <input 
              type="text" className="contact-input text-md" name="first-name" id="first-name" required 
              />
            </label>
            <label htmlFor="last-name" 
            className="contact-label">
              <span className="text-md">Last Name</span>
              <input 
              type="text" className="contact-input text-md" name="last-name" id="last-name" required 
              />
            </label>
            <label htmlFor="email" 
            className="contact-label">
              <span className="text-md">Email</span>
              <input 
              type="email" className="contact-input text-md" name="email" id="email" required 
              />
            </label>
            <label htmlFor="choose-topic" 
            className="contact-label">
              <span className="text-md">Choose a topic</span>
              <select name="choose-topic" id="choose-topic" className="contact-input text-md">
                <option>Select One...</option>
                <option>Item 1</option>
                <option>Item 2</option>
                <option>Item 3</option>
              </select>
            </label>
            <label htmlFor="message" 
            className="contact-label">
              <span className="text-md">Message</span>
              <textarea name="message" 
              id="message" 
              className="contact-input text-md"
              placeholder="Type your message..."/>
            </label>
            <label htmlFor="checkbox"
            className="checkbox-label" name="checkbox" id="checkbox" required>
              <input type="checkbox" required name="checkbox" id="checkbox" />
              <span className="text-sm">I accepts the terms</span>
            </label>
            <div>
              <button className="btn btn-primary contact-form-btn">Submit</button>
            </div>
          </div>
        </form>
      </section>
    );
  }