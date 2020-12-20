import React from 'react';
import './Footer.css';
import logo from '../Icon/black.png';
import fbLogo from '../../images/facebook-logo-in-circular-shape@2x.png';
import twitterLogo from '../../images/twitter (4)@2x.png';
import dribbbleLogo from '../../images/dribbble (1)@2x.png';
import behanceLogo from '../../images/behance-logo.png';

const Footer = () => {
  return (
    <div className="container">
      <div className="footer mt-5">
        <h1 style = {{color: '#0D052E' , fontSize: '45px' , fontWeight: '800'}} className="font-weight-bold text-center">Get your Favorite Movie Update and Enjoy</h1>
        <p className="mt-3 mb-5 text-center">Be the first know our latest offers and updates!</p>
        <div className="d-flex justify-content-center">
          <div class="input-group-prepend inputWidth search col-sm-12 col-md-6">
            <input type="email" class="form-control mr-3" placeholder="Enter your email address"/>
            <button className = ' btn-primary inputBtn'>Get Started</button>
          </div>
        </div>
        <div className="row footerList">
          <div className="col-md-6 col-sm-12 text-left">
            <div className="mt-3 mb-4">
              <img className="footerImg" src={logo} alt=""/>
            </div>
            <img src={fbLogo} alt=""/>
            <img src={twitterLogo} alt=""/>
            <img src={dribbbleLogo} alt=""/>
            <img className="behanceLogo" src={behanceLogo} alt=""/>
          </div>
          <div className="col-md-2 col-sm-12">
          <ul class="list-group">
            <li class="list-group-item">Features</li>
            <li class="list-group-item">Enterprise</li>
            <li class="list-group-item">Pricing</li>
          </ul>
          </div>
          <div className="col-md-2 col-sm-12">
            <ul class="list-group">
              <li class="list-group-item">Blog</li>
              <li class="list-group-item">Help Center</li>
              <li class="list-group-item">Contact Us</li>
              <li class="list-group-item">Status</li>
            </ul>
          </div>
          <div className="col-md-2 col-sm-12">
            <ul class="list-group">
              <li class="list-group-item">About Us</li>
              <li class="list-group-item">Terms Of Service</li>
              <li class="list-group-item">Security</li>
              <li class="list-group-item">Login</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;