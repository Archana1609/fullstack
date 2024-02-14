/*import CustomNavbar from "../components/CustomNavbar"

const About = () => {
    return (

<div className="container">
    <header>
        <CustomNavbar/>
    </header>
    <main>
        <section>
            <div>
           Welcome to aquavoyage cloud port
            </div>
        </section>
    </main>
</div>

    
 


    );
}
export default About*/
//import React from 'react';
import { Header } from 'rsuite';
import CustomNavbar from '../components/CustomNavbar';
import './about.css';

const About = () => {
  return (
    <div className='container'>
        <Header>
            <CustomNavbar/>
        </Header>
    
    <div className="total">
      <div className="about-section">
        <div className="inner-cont">
          <h1>About Us</h1>
          <p className="text">
          Welcome to AquaVoyage CloudPort, a haven for those seeking to immerse themselves in the enchanting world of waterfront retreats. Our story is one of passion for nature, a dedication to exceptional experiences, and a commitment to simplifying the journey of discovering and booking unique waterfront properties. AquaVoyage was born from the belief that the soothing embrace of water and the beauty of well-chosen retreats should be accessible to all, and our platform reflects this philosophy in every detail.

Our curated collection is a testament to the diverse wonders of waterfront living. From the serene ambiance of lakeside cottages to the opulence of beachfront villas, each property is carefully selected to offer a distinctive blend of charm, comfort, and awe-inspiring scenery. At AquaVoyage, we understand that these retreats are not just destinations but gateways to unforgettable memories, and our mission is to provide a seamless and delightful booking experience for every guest.

What sets AquaVoyage CloudPort apart is our unwavering commitment to simplicity. We believe that the planning phase of a waterfront retreat should be as enjoyable as the retreat itself. Our intuitive and user-friendly platform allows you to effortlessly explore our thoughtfully curated selection, finding the perfect retreat that resonates with your desires. Whether you seek a peaceful lakeside escape, a beachfront paradise, or a luxurious cabin nestled in nature, AquaVoyage CloudPort offers a diverse array of options to cater to every taste and preference.

Behind the scenes, our passionate team is dedicated to ensuring that your experience exceeds expectations. 

          </p>
        </div>
      </div>
    </div>
    
    <footer>
    <div className="footer-content">
      <p>&copy; 2024 AQUVA VOYAGE. All rights reserved.</p>
      <p>Contact us: info@aquavoyage.com</p>
    </div>
  </footer>
  </div>
  );
};

export default About;

