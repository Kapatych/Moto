import React from 'react';
import './footer.scss'
import {Link} from "react-router-dom";


const Footer = () => {
    return (
        <footer className='footer'>
            <div className="footer__social">
                <Link to='/'><i className="fa fa-facebook-square" aria-hidden="true"/></Link>
                <Link to='/'><i className="fa fa-twitter-square" aria-hidden="true"/></Link>
                <Link to='/'><i className="fa fa-pinterest-square" aria-hidden="true"/></Link>
                <Link to='/'><i className="fa fa-youtube-square" aria-hidden="true"/></Link>
                <Link to='/'><i className="fa fa-google-plus-square" aria-hidden="true"/></Link>
                <Link to='/'><i className="fa fa-instagram" aria-hidden="true"/></Link>
            </div>
            <Link to='/' className="footer__logo">moto.</Link>
            <div className="footer__payment">
                <Link to='/'><i className="fa fa-cc-amex" aria-hidden="true"/></Link>
                <Link to='/'><i className="fa fa-cc-discover" aria-hidden="true"/></Link>
                <Link to='/'><i className="fa fa-cc-visa" aria-hidden="true"/></Link>
                <Link to='/'><i className="fa fa-cc-mastercard" aria-hidden="true"/></Link>
                <Link to='/'><i className="fa fa-cc-paypal" aria-hidden="true"/></Link>
            </div>
            <div className="footer__copyright">Copyright © 2017 MOTO. Shopify TPowered by Shopify.</div>
        </footer>
    )
};

export default Footer;