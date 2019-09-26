import React from 'react';
const Tenant = ({tenant}) =>
    <div className="single-tenant" key={tenant.id}>
      <p>Name: {tenant.first_name} {tenant.last_name}</p>
      <p>Lives at which property? </p>
      <p>Has missed ## rent payments.</p>
      <p>Has been late on ## rent payments.</p>
      <p>Next rent payment of $xx.xx due on xx/xx/xx date.</p>
      <a href="#">View, end, and/or extend this tenant's lease.</a><br></br>
      <a href="#">View this tenant's maintenance requests.</a><br></br>
      <a href="#">View insurance claims this tenant is a part of.</a><br></br>
      <a href="#">Contact this tenant.</a><br></br>
    </div>
export default Tenant;
