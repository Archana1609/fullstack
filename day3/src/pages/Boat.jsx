import { Link } from 'react-router-dom';
import './boat.css';
import CustomNavbar from '../components/CustomNavbar';
const BoatHouses = () => {

    
  return (
    <div className="container">
      <header>
        <CustomNavbar/>
      </header>
    <div className="wrapper">
        <div className="top__header">
        
          <h3>AQUAVOYAGE ROOMS</h3>
        </div>
        <div className="cards">
          <div className="card">
            <div className="card__img">
              <picture>
                <source media="(max-width: 320px)" srcSet="https://images.unsplash.com/photo-1530629013299-6cb10d168419?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=335&h=200&q=80" />
                <source media="(min-width: 538px)" srcSet="https://images.unsplash.com/photo-1530629013299-6cb10d168419?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&h=200&q=1500" />
                <img src="https://images.unsplash.com/photo-1530629013299-6cb10d168419?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&h=200&q=1500" />
              </picture>
            </div>
            <div className="card__details">
              <h3 htmlFor="cozyroom">Room 1</h3>
              <div className="address"></div>
              <div className="price">
                <div className="star">
                  <img src="https://image.flaticon.com/icons/svg/291/291205.svg" alt="" />
                  <img src="https://image.flaticon.com/icons/svg/291/291205.svg" alt="" />
                  <img src="https://image.flaticon.com/icons/svg/291/291205.svg" alt="" />
                  <img src="https://image.flaticon.com/icons/svg/291/291205.svg" alt="" />
                </div>
                <div className="price__l">
                  <span className="price__label">Rs.5500/</span>
                  <span className="measure__label">Day</span>
                </div>
              </div>
              <Link to={'/bk'}>Book Now</Link>
            </div>
           
          </div>
          <div className="card">
            <div className="card__img">
              <picture>
                <source media="(max-width: 400px)" srcSet="https://images.unsplash.com/photo-1507038772120-7fff76f79d79?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=335&h=200&q=80" />
                <source media="(min-width: 481px)" srcSet="https://images.unsplash.com/photo-1507038772120-7fff76f79d79?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&h=200&q=80" />
                <img src="https://images.unsplash.com/photo-1507038772120-7fff76f79d79?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=335&h=200&q=80" />
              </picture>
            </div>
            <div className="card__details">
              <h3 htmlFor="tomato">Room 2</h3>
              <div className="address"></div>
              <div className="price"> 
                <div className="star">
                  <img src="https://image.flaticon.com/icons/svg/291/291205.svg" alt="" />
                  <img src="https://image.flaticon.com/icons/svg/291/291205.svg" alt="" />
                  <img src="https://image.flaticon.com/icons/svg/291/291205.svg" alt="" />
                  <img src="https://image.flaticon.com/icons/svg/291/291205.svg" alt="" />
                </div>
                <div className="price__l">
                  <span className="price__label">Rs.8000/</span>
                  <span className="measure__label">Day</span>
                </div>
              </div>
              <Link to={'/bk'}>Book Now</Link>
            </div>
           
          </div>
          <div className="card">
            <div className="card__img">
              <picture>
                <source media="(max-width: 400px)" srcSet="https://images.unsplash.com/photo-1541123356219-284ebe98ae3b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=335&h=200&q=80" />
                <source media="(min-width: 481px)" srcSet="https://images.unsplash.com/photo-1541123356219-284ebe98ae3b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&h=200&q=100" />
                <img src="https://images.unsplash.com/photo-1541123356219-284ebe98ae3b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=335&h=200&q=80" />
              </picture>
            </div>
            <div className="card__details">
              <h3 htmlFor="cozyroom">Room 3</h3>
              <div className="address"></div>
              <div className="price">
                <div className="star">
                  <img src="https://image.flaticon.com/icons/svg/291/291205.svg" alt="" />
                  <img src="https://image.flaticon.com/icons/svg/291/291205.svg" alt="" />
                  <img src="https://image.flaticon.com/icons/svg/291/291205.svg" alt="" />
                  <img src="https://image.flaticon.com/icons/svg/291/291205.svg" alt="" />
                </div>
                <div className="price__l">
                  <span className="price__label">Rs.4000/</span>
                  <span className="measure__label">Day</span>
                </div>
              </div>
              <Link to={'/bk'}>Book Now</Link>
            </div>
           
          </div>
          <div className="card">
            <div className="card__img">
              <picture>
                <source media="(max-width: 320px)" srcSet="https://images.unsplash.com/photo-1545022388-9e6d95c77174?ixlib=rb-1.2.1&auto=format&fit=crop&w=335&h=200&q=80" />
                <source media="(max-width: 500px)" srcSet="https://images.unsplash.com/photo-1545022388-9e6d95c77174?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&h=200&q=100" />
                <img src="https://images.unsplash.com/photo-1545022388-9e6d95c77174?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&h=200&q=80" />
              </picture>
            </div>
            <div className="card__details">
              <h3 htmlFor="cozyroom">Room 4</h3>
              <div className="address"></div>
              <div className="price">
                <div className="star">
                  <img src="https://image.flaticon.com/icons/svg/291/291205.svg" alt="" />
                  <img src="https://image.flaticon.com/icons/svg/291/291205.svg" alt="" />
                  <img src="https://image.flaticon.com/icons/svg/291/291205.svg" alt="" />
                  <img src="https://image.flaticon.com/icons/svg/291/291205.svg" alt="" />
                </div>
                <div className="price__l">
                  <span className="price__label">Rs.5000/</span>
                  <span className="measure__label">Day</span>
                </div>
              </div>
              <Link to={'/bk'}>Book Now</Link>
            </div>
            
          </div>
          <div className="card">
            <div className="card__img">
              <picture>
                <source media="(max-width: 320px)" srcSet="https://images.unsplash.com/photo-1540518614846-7eded433c457?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=335&h=200&q=80" />
                <source media="(max-width: 500px)" srcSet="https://images.unsplash.com/photo-1540518614846-7eded433c457?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&h=200&q=100" />
                <img src="https://images.unsplash.com/photo-1540518614846-7eded433c457?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&h=200&q=80" />
              </picture>
            </div>
            <div className="card__details">
              <h3 htmlFor="cozyroom">Room 5</h3>
              <div className="address"></div>
              <div className="price">
                <div className="star">
                  <img src="https://image.flaticon.com/icons/svg/291/291205.svg" alt="" />
                  <img src="https://image.flaticon.com/icons/svg/291/291205.svg" alt="" />
                  <img src="https://image.flaticon.com/icons/svg/291/291205.svg" alt="" />
                  <img src="https://image.flaticon.com/icons/svg/291/291205.svg" alt="" />
                </div>
                <div className="price__l">
                  <span className="price__label">Rs.10,000/</span>
                  <span className="measure__label">Day</span>
                </div>
              </div>
              <Link to={'/bk'}>Book Now</Link>
            </div>
            
          </div>
          <div className="card">
            <div className="card__img">
              <picture>
                <source media="(max-width: 320px)" srcSet="https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=335&h=200&q=80" />
                <source media="(max-width: 500px)" srcSet="https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&h=200&q=100" />
                <img src="https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&h=200&q=80" />
              </picture>
            </div>
            <div className="card__details">
              <h3 htmlFor="cozyroom">Room 6</h3>
              <div className="address"></div>
              <div className="price">
                <div className="star">
                  <img src="https://image.flaticon.com/icons/svg/291/291205.svg" alt="" />
                  <img src="https://image.flaticon.com/icons/svg/291/291205.svg" alt="" />
                  <img src="https://image.flaticon.com/icons/svg/291/291205.svg" alt="" />
                  <img src="https://image.flaticon.com/icons/svg/291/291205.svg" alt="" />
                </div>
                <div className="price__l">
                  <span className="price__label">RS.6000 /</span>
                  <span className="measure__label">Day</span>
                </div>
              </div>
              <Link to={'/bk'}>Book Now</Link>
            </div>
            
          </div>
        </div>
      </div>
      </div>
  );
};

export default BoatHouses;
