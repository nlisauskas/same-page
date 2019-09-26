import React from 'react';
const UserProfile = ({investor}) =>
    <div className="single-investor" key={investor.id}>
      <p>Name: {investor.first_name} {investor.last_name}</p>
      <a href="#">Edit your profile information.</a><br></br>
      <a href="#">View your lease(s).</a><br></br>
      <a href="#">View your maintenance requests.</a><br></br>
      <a href="#">View insurance claims you are a part of.</a><br></br>
    </div>
export default UserProfile;
