import React from 'react';
import './home-slider.scss';
import Slider from "../slider";
import slider_1 from "../../assets/images/slider_1.png";
import {Link} from "react-router-dom";
import slider_2 from "../../assets/images/slider_2.png";
import slider_3 from "../../assets/images/slider_3.png";

const HomeSlider = ({isDynamic, delay}) => {
    return (
        <div className='home__slider content-slider'>
            <Slider isDynamic={isDynamic} delay={delay}>

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
    )
};

export default HomeSlider;