import React from 'react';
import './nav.scss';
import {Link} from "react-router-dom";
import classNames from "classnames";
import PropTypes from 'prop-types';

import full_face from "../../assets/images/full_face_helmets.png";
import modular from "../../assets/images/modular_helmets.png";
import dual_sport from "../../assets/images/dual_sport_helmets.png";
import dirt from "../../assets/images/dirt_helmets.png";


const Nav = ({mobileMenu, setMobileMenu}) => {

    const className = classNames('header__menu menu', mobileMenu);

    return (
        <nav className={className} onClick={() => setMobileMenu('')}>
            <Link to='/' className='menu__link'>Home</Link>
            <Link to='/blog' className='menu__link'>Blog</Link>
            <div className='menu__with-submenu'>
                <Link to='/catalog' className='menu__link dropdown'>Catalog</Link>
                <div className='menu__submenu'>
                    <Link to='/catalog/categories/full-face-helmets' className='menu__link'>
                        <img src={full_face} alt="full_face" className='menu__link-img'/>
                        Full Face Helmet
                    </Link>
                    <Link to='/catalog/categories/modular-helmets' className='menu__link'>
                        <img src={modular} alt="modular" className='menu__link-img'/>
                        Modular Helmets
                    </Link>
                    <Link to='/catalog/categories/dual-sport-helmets' className='menu__link'>
                        <img src={dual_sport} alt="dual_sport" className='menu__link-img'/>
                        Dual Sport Helmets
                    </Link>
                    <Link to='/catalog/categories/dirt-helmets' className='menu__link'>
                        <img src={dirt} alt="dirt" className='menu__link-img'/>
                        Dirt Helmets
                    </Link>
                    {/*<Link to='/catalog/categories/snowmobile-helmets' className='menu__link'>
                                <img src={snow} alt="snowmobile" className='menu__link-img'/>
                                Snowmobile Helmets
                            </Link>*/}
                    {/*<Link to='/catalog/categories/open-face-helmets' className='menu__link'>
                                <img src={open_face} alt="open_face" className='menu__link-img'/>
                                Open Face Helmets
                            </Link>
                            <Link to='/catalog/categories/half-helmets' className='menu__link'>
                                <img src={half} alt="half" className='menu__link-img'/>
                                Half Helmets
                            </Link>*/}
                </div>
            </div>
            <Link to='/contact' className='menu__link'>Contacts</Link>

            <div className='menu__close' onClick={() => setMobileMenu('')}/>
        </nav>
    )
};

Nav.propTypes = {
    mobileMenu: PropTypes.string,
    setMobileMenu: PropTypes.func,
};

export default Nav;