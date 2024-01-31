import { useState } from "react";

const AdminUser = () => {
    // Sample user data
    const initialUser = {
      firstName: 'Admin',
      lastName: 'A',
      email: 'admin@example.com',
      phoneNumber: '123-456-7890',
      address: '123 Main St, Cityville, USA',
      profileImage: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png', // Add the URL to the user's profile image
    };
  
    const [user, setUser] = useState(initialUser);
    const [isEditing, setIsEditing] = useState(false);
  
    const wrapperStyle = {
      backgroundImage: `url('https://www.thoughtco.com/thmb/g8h6NnWWWVkm-KXNBgMx-0Edd2U=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages_482194715-56a1329e5f9b58b7d0bcf666.jpg')`, // Add the URL to the background image
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      height: '100vh', // 100% of the viewport height
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    };
  
    const containerStyle = {
      maxWidth: '600px',
      padding: '20px',
      backgroundColor: 'rgba(240, 248, 255, 0.8)', // Light blue background with some transparency
      boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
      borderRadius: '10px',
      textAlign: 'center',
      color: '#333',
    };
  
    const imageStyle = {
      width: '200px',
      height: '200px',
      borderRadius: '50%',
      objectFit: 'cover',
      marginBottom: '20px',
    };
  
    const handleEditClick = () => {
      setIsEditing(true);
    };
  
    const handleSaveClick = () => {
      // Add logic to save the edited user data (e.g., send a request to update the user profile)
      setIsEditing(false);
      // For simplicity, we'll just update the state without making an actual request
      setUser({ ...user });
    };
  
    const handleCancelClick = () => {
      // Cancel the editing and reset the user data
      setIsEditing(false);
      setUser(initialUser);
    };
  
    return (
      <div style={wrapperStyle}>
        <div style={containerStyle}>
          <h1>User Profile</h1>
          <div>
            <img
              src={user.profileImage}
              alt={`${user.firstName} ${user.lastName}`}
              style={imageStyle}
            />
          </div>
          {isEditing ? (
            <>
              <div>
                <label>
                  <strong>First Name:</strong>
                  <input
                    type="text"
                    value={user.firstName}
                    onChange={(e) => setUser({ ...user, firstName: e.target.value })}
                  />
                </label>
              </div>
              <div>
                <label>
                  <strong>Last Name:</strong>
                  <input
                    type="text"
                    value={user.lastName}
                    onChange={(e) => setUser({ ...user, lastName: e.target.value })}
                  />
                </label>
              </div>
              <div>
                <label>
                  <strong>Email:</strong>
                  <input
                    type="email"
                    value={user.email}
                    onChange={(e) => setUser({ ...user, email: e.target.value })}
                  />
                </label>
              </div>
              <div>
                <label>
                  <strong>Phone Number:</strong>
                  <input
                    type="tel"
                    value={user.phoneNumber}
                    onChange={(e) => setUser({ ...user, phoneNumber: e.target.value })}
                  />
                </label>
              </div>
              <div>
                <label>
                  <strong>Address:</strong>
                  <input
                    type="text"
                    value={user.address}
                    onChange={(e) => setUser({ ...user, address: e.target.value })}
                  />
                </label>
              </div>
              <div>
                <button className="lg"onClick={handleSaveClick}>Save</button>
                <button onClick={handleCancelClick}>Cancel</button>
              </div>
            </>
          ) : (
            <>
              <div>
                <strong>First Name:</strong> {user.firstName}
              </div>
              <div>
                <strong>Last Name:</strong> {user.lastName}
              </div>
              <div>
                <strong>Email:</strong> {user.email}
              </div>
              <div>
                <strong>Phone Number:</strong> {user.phoneNumber}
              </div>
              <div>
                <strong>Address:</strong> {user.address}
              </div>
              <div>
                <button className='lg' onClick={handleEditClick}>Edit Profile</button>
              </div>
            </>
          )}
        </div>
      </div>
    );
  };
  
  export default AdminUser;
  