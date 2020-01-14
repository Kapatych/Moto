import React from 'react';
import {Link} from "react-router-dom";
import './home-categories.scss';
import full_face from "../../assets/images/full_face_helmet.png";
import modular from "../../assets/images/modular_helmet.png";
import dual_sport from "../../assets/images/dual_sport_helmet.png";
import dirt from "../../assets/images/dirt_helmet.png";
import half from "../../assets/images/half_helmet.png";
import open_face from "../../assets/images/open_face_helmet.png";

const HomeCategories = () => {
    return (
        <div className='categories'>
            <div className='wrapper'>
                <div className='categories__content'>
                    <Link to='/catalog/categories/full-face-helmets' className='categories__item'>
                        <img src={full_face} alt="" className='categories__item-img'/>
                        <div className='categories__item-title title'>Full Face</div>
                    </Link>
                    <Link to='/catalog/categories/modular-helmets' className='categories__item'>
                        <img src={modular} alt="" className='categories__item-img'/>
                        <div className='categories__item-title title'>Modular</div>
                    </Link>
                    <Link to='/catalog/categories/dual-sport-helmets' className='categories__item'>
                        <img src={dual_sport} alt="" className='categories__item-img'/>
                        <div className='categories__item-title title'>Dual Sport</div>
                    </Link>
                    <Link to='/catalog/categories/dirt-helmets' className='categories__item'>
                        <img src={dirt} alt="" className='categories__item-img'/>
                        <div className='categories__item-title title'>Dirt</div>
                    </Link>
                    <Link to='/catalog/categories/half-helmets' className='categories__item'>
                        <img src={half} alt="" className='categories__item-img'/>
                        <div className='categories__item-title title'>Half</div>
                    </Link>
                    <Link to='/catalog/categories/open-face-helmets' className='categories__item'>
                        <img src={open_face} alt="" className='categories__item-img'/>
                        <div className='categories__item-title title'>Open Face</div>
                    </Link>

                </div>
            </div>
        </div>
    )
};

export default HomeCategories;