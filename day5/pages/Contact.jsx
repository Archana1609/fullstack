
import CustomNavbar from "../components/CustomNavbar"
import './Contact.css';
const Contact = () => {
    return (
        <div className="conatiner">
            <header>
                <CustomNavbar/>
            </header>
      <div>
        <div className="cust_body">
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=" />
        <title>Responsive Contact Us Page</title>
        <section>
          <div className="section-header">
            <div className="container">
              <h2>Contact Us</h2>
              <p>For any inquiries, suggestions, or assistance, feel free to reach out to us. We value your feedback and are here to help you. </p>
            </div>
          </div>
          <div className="container">
            <div className="row">
              <div className="contact-info">
                <div className="contact-info-item">
                 
                  
                </div>
                <div className="contact-info-item">
                  
                </div>
                <div className="contact-info-item">
                  
                  
                </div>
              </div>
              <div className="contact-form">
                <form action id="contact-form">
                  <h2>Send Message</h2>
                  <div className="input-box">
                    <input type="text" required="true" name />
                    <span>Full Name</span>
                  </div>
                  <div className="input-box">
                    <input type="email" required="true" name />
                    <span>Email</span>
                  </div>
                  <div className="input-box">
                    <textarea required="true" name defaultValue={""} />
                    <span>Type your Message...</span>
                  </div>
                  <div className="input-box">
                    <input type="submit" defaultValue="Send" name />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
      </div>
      </div>
       )
    }
    export default Contact
