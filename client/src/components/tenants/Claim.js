import React from 'react';
const Claim = ({claim}) =>
    <div className="single-payment" key={claim.id}>
      <p>This is the portion of a claim a tenant may or may not have access to.</p>
    </div>
export default Claim;
