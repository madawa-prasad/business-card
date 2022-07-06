import React from 'react';
import twitter from '../../assets/images/Twitter.png';
import facebook from '../../assets/images/Facebook.png';
import instagram from '../../assets/images/Instagram.png';
import linkedin from '../../assets/images/Linkedin.png';
import github from '../../assets/images/GitHub.png';
import './footer.css';

const Footer = () => {
  return (
    <footer>
      <div className="social-icons">
        <img src={twitter} alt="twitter" className="social-icon" />
        <img src={facebook} alt="facebook" className="social-icon" />
        <img src={instagram} alt="instagram" className="social-icon" />
        <img src={linkedin} alt="linkedin" className="social-icon" />
        <img src={github} alt="github" className="social-icon" />
      </div>
    </footer>
  );
};

export default Footer;
