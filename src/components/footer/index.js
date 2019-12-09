import React from 'react';
import './footer.scss'

import facebook from '../../assets/images/icon-facebook.png';
import google from '../../assets/images/icon-google-plus.png';
import instagram from '../../assets/images/icon-instagram.png';
import pinterest from '../../assets/images/icon-pinterest.png';
import twitter from '../../assets/images/icon-twitter.png';
import youtube from '../../assets/images/icon-youtube.png';
import paypal from '../../assets/images/icon-paypal.png';
import amex from '../../assets/images/icon-amex.png';
import discover from '../../assets/images/icon-discover.png';
import mastercard from '../../assets/images/icon-mastercard.png';
import visa from '../../assets/images/icon-visa.png';
import {Link} from "react-router-dom";


const Index = () => {
    return (
        <footer className='footer'>
            <div className='footer__top'>
                <div className="footer__categories">
                    <div className="footer__title">categories</div>
                    <div className="footer__nav">
                        <Link to='/catalog/categories/full-face-helmets' className="footer__nav-item">Full face</Link>
                        <Link to='/catalog/categories/modular-helmets' className="footer__nav-item">Modular</Link>
                        <Link to='/catalog/categories/dual-sport-helmets' className="footer__nav-item">Dual Sport</Link>
                        <Link to='/catalog/categories/snowmobile-helmets' className="footer__nav-item">Snowmobile</Link>
                        <Link to='/catalog/categories/dirt-helmets' className="footer__nav-item">Dirt</Link>
                        <Link to='/catalog/categories/open-face-helmets' className="footer__nav-item">Open Face</Link>
                        <Link to='/catalog/categories/half-helmets' className="footer__nav-item">Half</Link>
                        <Link to='/' className="footer__nav-item">intercom</Link>
                        <Link to='/' className="footer__nav-item">pinlock (anti fog)</Link>
                    </div>
                </div>
                <div className="footer__corporate-info">
                    <div className="footer__title">Corporate Info</div>
                    <div className="footer__nav">
                        <Link to='/' className="footer__nav-item">About us</Link>
                        <Link to='/' className="footer__nav-item">Careers</Link>
                        <Link to='/' className="footer__nav-item">Privacy Policy</Link>
                        <Link to='/' className="footer__nav-item">Terms & Conditions</Link>
                    </div>
                </div>
                <div className="footer__service">
                    <div className="footer__title">Custiomer service</div>
                    <div className="footer__nav">
                        <Link to='/' className="footer__nav-item">Faq</Link>
                        <Link to='/' className="footer__nav-item">return</Link>
                        <Link to='/' className="footer__nav-item">delivery</Link>
                        <Link to='/' className="footer__nav-item">order tracking</Link>
                        <Link to='/' className="footer__nav-item">contact us</Link>
                    </div>
                </div>
                <div className="footer__follow-us">
                    <div className="footer__title">Follow us</div>
                    <div className="footer__social">
                        <Link to='/'><img src={facebook} alt=""/></Link>
                        <Link to='/'><img src={twitter} alt=""/></Link>
                        <Link to='/'><img src={instagram} alt=""/></Link>
                        <Link to='/'><img src={pinterest} alt=""/></Link>
                        <Link to='/'><img src={youtube} alt=""/></Link>
                        <Link to='/'><img src={google} alt=""/></Link>
                    </div>
                    <div className="footer__payment-methods">
                        <Link to='/'><img src={amex} alt=""/></Link>
                        <Link to='/'><img src={discover} alt=""/></Link>
                        <Link to='/'><img src={visa} alt=""/></Link>
                        <Link to='/'><img src={mastercard} alt=""/></Link>
                        <Link to='/'><img src={paypal} alt=""/></Link>
                    </div>
                </div>
            </div>
            <div className='footer__bottom'>
                <div className="footer__logo">moto.</div>
                <div className="footer_copyright">Copyright © 2017 MOTO. Shopify TPowered by Shopify.</div>
            </div>
        </footer>
    )
};

export default Index;