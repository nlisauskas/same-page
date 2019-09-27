import React from 'react';
const Claim = ({claim}) =>
    <div className="single-claim" key={claim.id}>
      <p>This is a claim between a landlord and a contractor.</p>
    </div>
export default Claim;
