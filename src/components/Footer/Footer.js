import React from 'react';
import './Footer.scss'
import ArrowIcon from '../../images/path-copy-2.png'
const Footer = () => {
    return (
        <div className="footer-container">
            <div className="container">
                <div className="footer-text">
                    GOT JOKES? GET PAID FOR SUBMITTING!
                </div>
                <div className="footer-button-container">
                    <a className="footer-button" href="#">SUBMIT JOKE
                        <p><img className="arrow-icon" src={ArrowIcon} alt=""/></p>
                    </a>
                </div>
    
            </div>
        </div>
    );
};

export default Footer;
