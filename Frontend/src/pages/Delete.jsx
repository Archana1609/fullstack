import  { useState } from "react";

const DeleteBooking = () => {
  const [bookingId, setBookingId] = useState("");
  const [deleteMessage, setDeleteMessage] = useState("");

  const handleDelete = () => {
    // Implement your logic to delete the booking with the given ID
    // You may want to make an API call to your backend for deletion

    // Replace 'your_backend_api_url' with the actual URL of your API
    const apiUrl = `your_backend_api_url/bookings/${bookingId}`;

    fetch(apiUrl, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        // Add any other headers needed for authentication or authorization
      },
    })
      .then(response => {
        if (response.ok) {
          setDeleteMessage(`Booking with ID ${bookingId} deleted successfully.`);
        } else {
          setDeleteMessage(`Error deleting booking with ID ${bookingId}.`);
        }
      })
      .catch(error => {
        console.error('Error deleting booking', error);
        setDeleteMessage(`Error deleting booking with ID ${bookingId}.`);
      });
  };

  return (
    <div className="bb">
    <div>
      {/* Your existing styling and HTML code here */}
      <style>
        {`
          /* Your existing styling and HTML code here */

          .form-group {
            margin-bottom: 20px;
          }
          body{
            background : url('https://img.freepik.com/premium-photo/aqua-waves-coconut-palm-shadow-blue-background_954894-73521.jpg');
            background-size:100%;
          }

          .form-label {
            display: block;
            margin-bottom: 5px;
            font-size: 14px;
            color: #fff;
          }

          .form-control {
            width: 50%;
            height: 40px;
            padding: 5px 10px;
            border: 1px solid #ddd;
            border-radius: 5px;
            background-color: black;
            color: #fff;
          }

          .form-btn {
            margin-top: 20px;
          }

          .submit-btn {
            color: black;
            background-color: #e35e0a;
            font-weight: 700;
            height: 40px;
            padding: 5px 15px;
            border-radius: 5px;
            border: none;
            text-transform: uppercase;
            font-size: 14px;
            letter-spacing: 1.3px;
            transition: 0.2s all;
            cursor: pointer;
          }

          .submit-btn:hover,
          .submit-btn:focus {
            opacity: 0.9;
          }

          p {
            margin-top: 10px;
            font-size: 14px;
            color: #e35e0a;
          }
        `}
      </style>

      <div className="form-group">
        <h1 className="p">Delete Booking</h1>
        <span className="form-label">Booking Id</span>
        <input
          className="form-control"
          type="number"
          placeholder="Enter Booking Id"
          value={bookingId}
          onChange={(e) => setBookingId(e.target.value)}
        />
      </div>

      <div className="form-btn">
        <button
          className="submit-btn"
          onClick={handleDelete}
        >
          Delete Booking
        </button>
      </div>

      {deleteMessage && <p>{deleteMessage}</p>}
    </div>
    </div>
  );
};

export default DeleteBooking;
