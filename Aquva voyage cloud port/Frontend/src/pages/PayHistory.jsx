//import React from 'react';

import CustomNavbar from "../components/CustomNavbar";

const PaymentHistoryPage = () => {
  // Sample payment history data
  const paymentHistory = [
    {
      id: 1,
      reservationId: 'RES123',
      amount: 200,
      date: '2024-01-31',
    },
    {
      id: 2,
      reservationId: 'RES456',
      amount: 150,
      date: '2024-01-30',
    },
    {
        id: 3,
        reservationId: 'RES458',
        amount: 100,
        date: '2024-01-16',
      },
      {
        id: 4,
        reservationId: 'RES477',
        amount: 120,
        date: '2024-01-27',
      },
    // Add more payment history data as needed
  ];

  const containerStyle = {
    maxWidth: '800px',
    margin: '20px auto',
    padding: '20px',
    backgroundColor: '#fff',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
  };

  const headingStyle = {
    color: '#333',
  };

  const tableStyle = {
    width: '100%',
    borderCollapse: 'collapse',
    marginTop: '20px',
  };

  const thTdStyle = {
    padding: '12px',
    textAlign: 'left',
    borderBottom: '1px solid #ddd',
  };

 /* const thStyle = {
    backgroundColor: '#f2f2f2',
  };
*/
  const trHoverStyle = {
    backgroundColor: '#f5f5f5',
  };

  return (
    <div className="container">
      <header>
        <CustomNavbar/>
      </header>
    <div style={containerStyle}>
      <h1 style={headingStyle}>Payment History</h1>
      <table style={tableStyle}>
        <thead>
          <tr>
            <th style={thTdStyle}>ID</th>
            <th style={thTdStyle}>Reservation ID</th>
            <th style={thTdStyle}>Amount</th>
            <th style={thTdStyle}>Date</th>
          </tr>
        </thead>
        <tbody>
          {paymentHistory.map((payment) => (
            <tr key={payment.id} style={trHoverStyle}>
              <td style={thTdStyle}>{payment.id}</td>
              <td style={thTdStyle}>{payment.reservationId}</td>
              <td style={thTdStyle}>${payment.amount}</td>
              <td style={thTdStyle}>{payment.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </div>
  );
};

export default PaymentHistoryPage;
