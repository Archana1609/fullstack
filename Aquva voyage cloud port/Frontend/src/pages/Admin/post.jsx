import { useState } from 'react';

const BoatDetailsForm = () => {
  const [boatDetails, setBoatDetails] = useState({
    name: '',
    type: '',
    description: '',
    capacity: 0,
    pricePerHour: 0,
    image: null,
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBoatDetails({
      ...boatDetails,
      [name]: value,
    });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setBoatDetails({
      ...boatDetails,
      image: file,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle submission of boat details, e.g., send to backend API
    console.log(boatDetails);
    // Clear form fields after submission
    setBoatDetails({
      name: '',
      type: '',
      description: '',
      capacity: 0,
      pricePerHour: 0,
      image: null,
    });
    // Set submitted state to true
    setSubmitted(true);
  };

  return (
    <div className="page-container" style={{ backgroundImage: 'url("https://i.pinimg.com/736x/c4/8d/6e/c48d6e17339e0155c1b53f67eb9dab98.jpg")', backgroundSize: 'cover', backgroundPosition: 'center', minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <div className="form-container" style={{ maxWidth: '400px', width: '100%', padding: '20px', borderRadius: '8px', backgroundColor: 'rgba(255, 255, 255, 0.8)' }}>
        {submitted ? (
          <div>
            <h2>Thank you for submitting!</h2>
            <p>Your boat details have been successfully submitted.</p>
          </div>
        ) : (
            
                
          <form onSubmit={handleSubmit}>
            <h1>Post Boat Details</h1>
            <div>
              <label htmlFor="name">Boat Name:</label>
              <input type="text" id="name" name="name" value={boatDetails.name} onChange={handleChange} required />
            </div>
            <div>
              <label htmlFor="type">Boat Type:</label>
              <input type="text" id="type" name="type" value={boatDetails.type} onChange={handleChange} required />
            </div>
            <div>
              <label htmlFor="description">Description:</label>
              <textarea id="description" name="description" value={boatDetails.description} onChange={handleChange} required />
            </div>
            <div>
              <label htmlFor="capacity">Capacity:</label>
              <input type="number" id="capacity" name="capacity" value={boatDetails.capacity} onChange={handleChange} required />
            </div>
            <div>
              <label htmlFor="pricePerHour">Price per Hour:</label>
              <input type="number" id="pricePerHour" name="pricePerHour" value={boatDetails.pricePerHour} onChange={handleChange} required />
            </div>
            <div>
              <label htmlFor="image">Image:</label>
              <input type="file" id="image" name="image" onChange={handleImageChange} required />
            </div>
            <button type="submit" style={{ backgroundColor: 'purple', color: 'white', border: 'none', padding: '10px', borderRadius: '5px' }}>Submit</button>
          </form>
        )}
      </div>
    </div>
  );
};

export default BoatDetailsForm;
