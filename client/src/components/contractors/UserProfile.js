import React from 'react';
const UserProfile = ({contractor}) =>
    <div className="single-contractor" key={contractor.id}>
      <p>Name: {contractor.first_name} {contractor.last_name}</p>
      <a href="#">Edit your profile information.</a><br></br>
      <a href="#">View your projects.</a><br></br>
      <a href="#">View your calendar.</a><br></br>
      <a href="#">View jobs that need your services.</a><br></br>
      <a href="#">View insurance claims you are a part of.</a><br></br>
    </div>
export default UserProfile;
