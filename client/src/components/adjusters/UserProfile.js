import React from 'react';
const UserProfile = ({insurer}) =>
    <div className="single-insurer" key={insurer.id}>
      <p>Name: {insurer.first_name} {insurer.last_name}</p>
      <a href="#">Edit your profile information.</a><br></br>
      <a href="#">View your claims.</a><br></br>
      <a href="#">Pay a settlement on a claim.</a><br></br>
      <a href="#">View your settlement history.</a><br></br>
    </div>
export default UserProfile;
