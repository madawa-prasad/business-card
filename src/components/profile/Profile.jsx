import React from 'react';
import profile from '../../images/profile.jpg';
import email from '../../images/email.png';
import './profile.css';

const Profile = () => {
  return (
    <div className="profile-container">
      <img src={profile} alt="" className="profile-image" />
      <div className="profile-info">
        <h2 className="name">John Doe</h2>
        <h4 className="title">React Developer</h4>
        <span className="website">johndoe.com</span>
        <button className="email">
          <img src={email} alt="" className="email-icon" />
          Email
        </button>
        <p className="details">
          <h3>About</h3>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil
            sequi tempore eligendi eius tempora aliquam non explicabo laborum
            voluptate corrupti! Fugiat necessitatibus quas omnis iste voluptatum
            quo dignissimos cupiditate neque?
          </p>
          <h3>Interests</h3>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil
            sequi tempore eligendi eius tempora aliquam non explicabo laborum
            voluptate corrupti! Fugiat necessitatibus quas omnis iste voluptatum
            quo dignissimos cupiditate neque?
          </p>
        </p>
      </div>
    </div>
  );
};

export default Profile;
