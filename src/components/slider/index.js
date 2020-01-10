import React, { useState, useEffect } from 'react';
import './slider.scss';

const Slider = ({children, isDynamic, delay}) => {
    const [active , setActive] = useState(0);
    let timerId = null;

    useEffect(() => {
        if (isDynamic) {
            timerId = setTimeout(() => {
                let currentImageIndex = active;
                currentImageIndex = (currentImageIndex === children.length - 1) ? 0 : currentImageIndex + 1;
                setActive(currentImageIndex);
            }, delay)
        }
    });

    //If product contains only one image
    if (children.length === 1) {
        return <img src={children[0].props.src} className='single-image' alt=""/>
    }

    if (children.length === undefined && typeof (children) === 'object') {
        return children;
    }

    const turnImage = (e) => {
        let currentImageIndex = active;
        if (e.target.dataset.direction === 'next') {
            currentImageIndex = (currentImageIndex === children.length - 1) ? 0 : currentImageIndex + 1;
        } else {
            currentImageIndex = (currentImageIndex === 0) ? children.length - 1 : currentImageIndex - 1;
        }
        clearTimeout(timerId);
        return setActive(currentImageIndex);
    };

    const showImage = (e) => setActive(+e.target.dataset.index);

    return (
        <div className="slider">
            <div className='slider__main'>
                <button onClick={turnImage}
                        data-direction='prev'
                        className="slider__button slider__prev">
                </button>
                <div className="slider__content">
                    {children[active]}
                </div>
                <button onClick={turnImage}
                        data-direction='next'
                        className="slider__button slider__next">
                </button>
            </div>
            <div className='slider__dots'>
                {
                    children.map( (child, idx) => {
                        return (
                            <button onClick={showImage}
                                    key={idx}
                                    className={`slider__dots-item${(idx === active) ? ' slider__dots-item_active' : ''}`}
                                    data-index={idx} />
                        )
                    })
                }
            </div>
        </div>
    )
};

export default Slider;