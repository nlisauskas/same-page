import React from 'react';
const Payment = ({payment}) =>
    <div className="single-payment" key={payment.id}>
      <p>Source: {payment.source}</p>
      <p>Amount: {payment.amount}</p>
      <p>Frequency: {payment.frequency}</p>
      <p>Description: {payment.description}</p>
    </div>
export default Payment;
