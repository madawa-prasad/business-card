import React from 'react';
import twitter from '../../images/Twitter.png';
import facebook from '../../images/Facebook.png';
import instagram from '../../images/Instagram.png';
import linkedin from '../../images/Linkedin.png';
import github from '../../images/GitHub.png';
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
