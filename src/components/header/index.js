import React from 'react';
import './header.scss';
import {Link} from "react-router-dom";
import Search from "../search/search";

const Header = ({quantity, searchProduct, deleteAllFilters, history}) => {

    return (
        <header className='header'>
            <Link to='/' className='header__logo logo'>moto.</Link>

            <nav className='header__menu menu'>
                <Link to='/' className='menu__link'>Home</Link>
                <Link to='/blog' className='menu__link'>Blog</Link>
                <Link to='/catalog' className='menu__link dropdown'>Catalog</Link>
                <Link to='/contact' className='menu__link'>Contacts</Link>
            </nav>

            <Search searchProduct={searchProduct}
                    history={history}
                    deleteAllFilters={deleteAllFilters}/>

            <div className='header__buttons'>
                <Link to='/cart' className='header__cart'>{quantity}</Link>
                <Link to='/auth' className='header__auth'/>
            </div>



            {/* </div>*/}


        </header>
    )
};

export default Header;