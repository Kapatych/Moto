import React from 'react';
import './header.scss';
import {Link} from "react-router-dom";
import Search from "../search/search";
import classNames from 'classnames'

const Header = ({quantity, searchProduct, deleteAllFilters, history}) => {

    const [mobileMenu, setMobileMenu] = React.useState('');

    const menuClassName = classNames('header__menu menu', mobileMenu);

    return (
        <header className='header'>
            <Link to='/' className='header__logo logo'>moto.</Link>

            <nav className={menuClassName} onClick={() => setMobileMenu('')}>
                <Link to='/' className='menu__link'>Home</Link>
                <Link to='/blog' className='menu__link'>Blog</Link>
                <Link to='/catalog' className='menu__link dropdown'>Catalog</Link>
                <Link to='/contact' className='menu__link'>Contacts</Link>

                <div className='menu__close' onClick={() => setMobileMenu('')}/>
            </nav>

            <Search searchProduct={searchProduct}
                    history={history}
                    deleteAllFilters={deleteAllFilters}/>

            <div className='header__buttons'>
                <Link to='/cart' className='header__cart'>{quantity}</Link>
                <Link to='/auth' className='header__auth'/>
                <div className='header__burger' onClick={() => setMobileMenu('mobile')}/>
            </div>



            {/* </div>*/}


        </header>
    )
};

export default Header;