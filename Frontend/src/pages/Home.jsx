import { Link } from "react-router-dom";
import CustomNavbar from "../components/CustomNavbar"
import './Home.css';

const Home = () => {
    return (

<div className="container">
    <header>
    <CustomNavbar/>
    </header>
    <div>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href="style.css" />
        <title>Homepage design</title>
        <div className="banner-area">
          <header>
          </header>
          <div className="banner-text">
            <h1>AQUAVOYAGE CLOUDPORT</h1>
            <p>Experience seamless connectivity and unparalleled control with AquaVoyage Cloud Port – our innovative project designed to effortlessly navigate and manage your cloud resources, ensuring a smooth and efficient voyage through the ever-evolving landscape of cloud computing.</p>
            <Link to={'/exp'}>Explore More</Link>
            <Link to={'/del'}>Delete Booking</Link>
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
    )
}
export default Home