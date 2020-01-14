import React from 'react';
import Slider from "../slider";
import './home.scss';
import {Link} from "react-router-dom";
import slider_1 from '../../assets/images/slider_1.png';
import slider_2 from '../../assets/images/slider_2.png';
import slider_3 from '../../assets/images/slider_3.png';
import full_face from "../../assets/images/full_face_helmet.png";
import modular from "../../assets/images/modular_helmet.png";
import dual_sport from "../../assets/images/dual_sport_helmet.png";
import dirt from "../../assets/images/dirt_helmet.png";
import half from "../../assets/images/half_helmet.png";
import open_face from "../../assets/images/open_face_helmet.png";

const Home = () => {
    return (
        <div className='home'>
            <div className='home__slider content-slider'>
                <Slider isDynamic={true} delay={4000}>

                    <div className='slider__item'>
                        <img src={slider_1} alt="1" className='slider__item-img'/>
                        <div className='slider__item-info'>
                            <div className='slider__item-info-content'>
                                <div className='slider__title'>O'Neal 5 Series</div>
                                <div className='slider__subtitle'>Constructed using a lightweight polycarbonate shell
                                </div>
                                <Link to="/catalog/O'Neal-5-Series-Wingman" className='button'>view product</Link>
                            </div>
                            <div/>
                        </div>
                    </div>

                    <div className='slider__item'>
                        <img src={slider_2} alt="2" className='slider__item-img'/>
                        <div className='slider__item-info'>
                            <div className='slider__item-info-content'>
                                <div className='slider__title'>Scorpion EXO-R420</div>
                                <div className='slider__subtitle'>With an advanced polycarbonate shell</div>
                                <Link to="/catalog/Scorpion-EXO-R420" className='button'>view product</Link>
                            </div>
                            <div/>
                        </div>
                    </div>

                    <div className='slider__item'>
                        <img src={slider_3} alt="2" className='slider__item-img'/>
                        <div className='slider__item-info'>
                            <div className='slider__item-info-content'>
                                <div className='slider__title'>Arai VX Pro 4</div>
                                <div className='slider__subtitle'>For the serious off-road enthusiasts</div>
                                <Link to="/catalog/Arai-VX-Pro-4" className='button'>view product</Link>
                            </div>
                            <div/>
                        </div>
                    </div>

                </Slider>
            </div>

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


        </div>
    )
};

export default Home;