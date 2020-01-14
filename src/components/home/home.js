import React from 'react';
import './home.scss';

import HomeSlider from "./home-slider";
import HomeCategories from "./home-categories";

const Home = () => {
    return (
        <div className='home'>
            <HomeSlider isDynamic={true} delay={4000} />
            <HomeCategories/>
        </div>
    )
};

export default Home;