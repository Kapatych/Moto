import React from 'react';
import './header.scss';
import {Link} from "react-router-dom";
import Search from "../search/search";
import Nav from "./nav";

const Header = ({quantity, searchProduct, deleteAllFilters, history}) => {

    const [mobileMenu, setMobileMenu] = React.useState('');
    const [mobileSearch, setMobileSearch] = React.useState('');

    return (
        <header className='header'>
            <Link to='/' className='header__logo logo'>moto.</Link>

            {
                (mobileSearch === '' || mobileMenu === 'menu_mobile') &&
                <Nav mobileMenu={mobileMenu} setMobileMenu={setMobileMenu}/>
            }

            <Search searchProduct={searchProduct}
                    history={history}
                    deleteAllFilters={deleteAllFilters}
                    mobileSearch={mobileSearch}
                    setMobileSearch={setMobileSearch}/>


            <div className='header__buttons'>
                <div className='header__search'
                     onClick={() => mobileSearch === '' ? setMobileSearch('search_mobile') : setMobileSearch('')}/>
                <Link to='/cart' className='header__cart'>
                    {(quantity > 0) && <span className='header__cart-quantity'>{quantity}</span>}
                </Link>
                <Link to='/auth' className='header__auth'/>
                <div className='header__burger' onClick={() => setMobileMenu('menu_mobile')}/>
            </div>
        </header>
    )
};

export default Header;