import React from 'react';
import './header.scss';
import {Link} from "react-router-dom";

import icon_dropdown from '../../assets/images/icon-triangle-down.png';
import icon_cart from '../../assets/images/icon-cart.png';
import icon_auth from '../../assets/images/icon-user.png';


const Index = () => {
    return (
        <header>
            <Link to='/' className='logo'>moto.</Link>
            <nav className='menu'>
                <Link to='/'>Home</Link>
                <Link to='/blog'>Blog</Link>
                <Link to='/catalog'>
                    Catalog
                    <img src={icon_dropdown} alt="" className='icon-dropdown'/>
                </Link>
                <Link to='/contact'>Contacts</Link>
            </nav>
            <div className='top-nav'>
                <div className='currency'>
                    usd
                    <img src={icon_dropdown} alt="" className='icon-dropdown'/>
                </div>
                <div className='search'>
                    <input type="text" placeholder='search'/>
                </div>
                <div className='cart-mini'>
                    <Link to='/cart'>
                        <img src={icon_cart} alt="" className='icon-cart'/>
                    </Link>
                </div>
                <div className='auth'>
                    <Link to='/auth'>
                        <img src={icon_auth} alt="" className='icon-auth'/>
                    </Link>
                </div>
            </div>

        </header>
    )
};

export default Index;