import React from 'react';
const Payment = ({payment}) =>
    <div className="single-payment" key={payment.id}>
      <p>This is a payment from a tenant / insurer or to a contractor.</p>
    </div>
export default Payment;
