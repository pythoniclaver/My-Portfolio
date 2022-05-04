import React from 'react'
import './footer.css'
import {FaFacebook} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'
import {IoLogoTwitter} from 'react-icons/io'
 
const Footer = () => {
  return (
    <footer id='footer'>
      <a href="#" className="footer__logo">PYTHONICHUB</a>

        <ul className="permalinks">
          <li><a href="#">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#portfolio">Portfolio</a></li>
          <li><a href="#testimonials">Testimonials</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      
      <div className="footer__socials">
        <a href="https://facebook.com/Vincent.coderr/" target="_blank" rel='noreferrer noopener'><FaFacebook /></a>
        <a href="https://instagram.com/pythonic.lava" target="_blank" rel='noreferrer noopener'><FiInstagram /></a>
        <a href="https://twitter.com/Vincent_coder" target="_blank" rel='noreferrer noopener'><IoLogoTwitter /></a>
      </div>

    <div className="footer__copyright">
      <small>&copy; PYTHONICHUB. All rights reserved</small>
    </div>
    </footer>
  )
}

export default Footer;