import { useState } from 'react';

const EditDeleteBoatDetails = () => {
  const [boatDetails, setBoatDetails] = useState({
    name: '',
    type: '',
    description: '',
    capacity: 0,
    pricePerHour: 0,
    image: null,
  });

  const handleEdit = () => {
    // Handle edit functionality, e.g., navigate to edit form with current boat details
    console.log('Edit boat details');
  };

  const handleDelete = () => {
    // Handle delete functionality, e.g., show confirmation modal
    console.log('Delete boat details');
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBoatDetails({
      ...boatDetails,
      [name]: value,
    });
  };

  return (
    <div className="page-container" style={{ backgroundImage: 'url("https://i.pinimg.com/736x/c4/8d/6e/c48d6e17339e0155c1b53f67eb9dab98.jpg")', backgroundSize: 'cover', backgroundPosition: 'center', minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <div className="form-container" style={{ maxWidth: '400px', width: '100%', padding: '20px', borderRadius: '8px', backgroundColor: 'rgba(255, 255, 255, 0.8)' }}>
        <div>
          <label htmlFor="name">Boat Name:</label>
          <input type="text" id="name" name="name" value={boatDetails.name} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="type">Boat Type:</label>
          <input type="text" id="type" name="type" value={boatDetails.type} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="description">Description:</label>
          <textarea id="description" name="description" value={boatDetails.description} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="capacity">Capacity:</label>
          <input type="number" id="capacity" name="capacity" value={boatDetails.capacity} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="pricePerHour">Price per Hour:</label>
          <input type="number" id="pricePerHour" name="pricePerHour" value={boatDetails.pricePerHour} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="image">Image:</label>
          <input type="file" id="image" name="image" onChange={handleChange} />
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px' }}>
          <button onClick={handleEdit} style={{ backgroundColor: 'purple', color: 'white', border: 'none', padding: '10px', borderRadius: '5px', width: '48%' }}>Edit</button>
          <button onClick={handleDelete} style={{ backgroundColor: 'red', color: 'white', border: 'none', padding: '10px', borderRadius: '5px', width: '48%' }}>Delete</button>
        </div>
      </div>
    </div>
  );
};

export default EditDeleteBoatDetails;
