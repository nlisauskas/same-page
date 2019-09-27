import React from 'react';
const UserProfile = ({tenant}) =>
    <div className="single-investor" key={tenant.id}>
      <p>Name: {tenant.first_name} {tenant.last_name}</p>
      <a href="#">Edit your profile information.</a><br></br>
      <a href="#">View your lease(s).</a><br></br>
      <a href="#">View your maintenance requests.</a><br></br>
      <a href="#">View your payment history.</a><br></br>
      <a href="#">View insurance claims you are a part of.</a><br></br>
    </div>
export default UserProfile;
