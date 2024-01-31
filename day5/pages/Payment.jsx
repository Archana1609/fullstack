/*import  { useState } from 'react';
import './payment.css';

function Payment() {
  const [cardHolderName, setCardHolderName] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [expiryMonth, setExpiryMonth] = useState('');
  const [expiryYear, setExpiryYear] = useState('');
  const [cvv, setCvv] = useState('');

  const handlePayNow = () => {
    // Simple client-side validations
    if (!cardHolderName.trim()) {
      alert('Please enter Card Holder\'s Name.');
    } else if (!cardNumber.trim() || isNaN(cardNumber)) {
      alert('Please enter a valid Card Number.');
    } else if (!expiryMonth || !expiryYear) {
      alert('Please select Expiration Month and Year.');
    } else if (!cvv.trim() || isNaN(cvv)) {
      alert('Please enter a valid Card CVV.');
    } else {
      // Perform payment logic
      alert('Payment successful!');
    }
  };

  return (
    <form className="form-horizontal" role="form">
      <fieldset>
        <legend>
          <h1 className="form-top">Payment</h1>
        </legend>
        <div className="form-group">
          <label className="col-sm-3 control-label" htmlFor="card-holder-name">
            Name
          </label>
          <div className="col-sm-9">
            <input
              type="text"
              className="form-control"
              name="card-holder-name"
              id="card-holder-name"
              placeholder="Card Holder's Name"
              value={cardHolderName}
              onChange={(e) => setCardHolderName(e.target.value)}
            />
          </div>
        </div>
        <div className="form-group">
          <label className="col-sm-3 control-label" htmlFor="card-number">
            Number
          </label>
          <div className="col-sm-9">
            <input
              type="text"
              className="form-control"
              name="card-number"
              id="card-number"
              placeholder="Debit/Credit Card Number"
              value={cardNumber}
              onChange={(e) => setCardNumber(e.target.value)}
            />
          </div>
        </div>
        <div className="form-group">
          <label className="col-sm-3 control-label" htmlFor="expiry-month">
            Expiration
          </label>
          <div className="col-sm-9">
            <div className="row">
              <div className="col-xs-6">
                <select
                  className="form-control col-sm-2"
                  name="expiry-month"
                  id="expiry-month"
                  value={expiryMonth}
                  onChange={(e) => setExpiryMonth(e.target.value)}
                >
                  
                </select>
              </div>
              <div className="col-xs-6">
                <select
                  className="form-control col-sm-2"
                  name="expiry-year"
                  value={expiryYear}
                  onChange={(e) => setExpiryYear(e.target.value)}
                >
                 
                </select>
              </div>
            </div>
          </div>
        </div>
        <div className="form-group">
          <label className="col-sm-3 control-label" htmlFor="cvv">
            Card CVV
          </label>
          <div className="col-sm-6">
            <input
              type="text"
              className="form-control"
              name="cvv"
              id="cvv"
              placeholder="Security Code"
              value={cvv}
              onChange={(e) => setCvv(e.target.value)}
            />
          </div>
        </div>
        <br />
        <div className="form-group">
          <div className="col-sm-12">
            <button
              type="button"
              className="btn btn-success"
              id="pay-now"
              onClick={handlePayNow}
            >
              Pay Now
            </button>
          </div>
        </div>
      </fieldset>
    </form>
  );
}

export default Payment;
*/
import  { useState } from "react";
import './payment.css';
import { Button } from "rsuite";
import { Link } from "react-router-dom";
import CustomNavbar from "../components/CustomNavbar";

const PaymentPage = () => {
  const [cardNumber, setCardNumber] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvv, setCvv] = useState("");
  const [nameOnCard, setNameOnCard] = useState("");
  const [paymentMessage, setPaymentMessage] = useState("");
  const [isValidCard, setIsValidCard] = useState(true);

  const handlePayment = () => {
    // Validate credit card before processing payment
    if (!isValidCreditCard(cardNumber)) {
      setIsValidCard(false);
      return;
    }

    // Implement your payment processing logic here
    // For a real application, use a payment gateway like Stripe or others

    // Mocking a successful payment
    setPaymentMessage("Payment successful! Thank you for your purchase.");

    // Reset form fields after successful payment
    setCardNumber("");
    setExpiryDate("");
    setCvv("");
    setNameOnCard("");
    setIsValidCard(true);
  };

  const isValidCreditCard = (cardNumber) => {
    // Validate credit card using Luhn algorithm
    const sanitizedCardNumber = cardNumber.replace(/\D/g, '');

    if (sanitizedCardNumber.length !== 16) {
      return false;
    }

    let sum = 0;
    let shouldDouble = false;

    for (let i = sanitizedCardNumber.length - 1; i >= 0; i--) {
      let digit = parseInt(sanitizedCardNumber.charAt(i));

      if (shouldDouble) {
        digit *= 2;

        if (digit > 9) {
          digit -= 9;
        }
      }

      sum += digit;
      shouldDouble = !shouldDouble;
    }

    return sum % 10 === 0;
  };

  return (
    <div className="container">
      <header>
        <CustomNavbar/>
      </header>
    
    <div>
      <h1 className="pay">Payment</h1>
      <div className="payment-form">
        <div className={`form-group ${!isValidCard ? 'error' : ''}`}>
          <label>Card Number</label>
          <input
            type="text"
            value={cardNumber}
            onChange={(e) => setCardNumber(e.target.value)}
            placeholder="Enter your card number...."
          />
          {!isValidCard && <p className="error-message">Invalid card number</p>}
        </div>
        <div className="form-group">
          <label>Expiry Date</label>
          <input
            type="text"
            value={expiryDate}
            onChange={(e) => setExpiryDate(e.target.value)}
            placeholder="MM/YY"
          />
        </div>
        <div className="form-group">
          <label>CVV</label>
          <input
            type="text"
            value={cvv}
            onChange={(e) => setCvv(e.target.value)}
            placeholder="CVV"
          />
        </div>
        <div className="form-group">
          <label>Name</label>
          <input
            type="text"
            value={nameOnCard}
            onChange={(e) => setNameOnCard(e.target.value)}
            placeholder="Enter your name"
          />
        </div>
        <div className="form-btn">
          <button className="submit-btn" onClick={handlePayment}>
            Make Payment
          </button>
        </div>
        {paymentMessage && <p className="payment-message">{paymentMessage}</p>}
      </div>
      <div>
        <Button className="ph"><Link to={'/ph'}>Payment history</Link></Button>
      </div>
    </div>
    </div>
  );
};

export default PaymentPage;
