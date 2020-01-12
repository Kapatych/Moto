import React from 'react';
import './counter.scss'
import classNames from 'classnames'
import PropTypes from 'prop-types';
import icon_minus from "../../assets/images/icon_minus.png";
import icon_plus from "../../assets/images/icon_plus.png";

const Counter = ({quantity, onIncrease, onDecrease, parentClass}) => {
    const className = classNames('counter', {[`${parentClass}__counter`]: parentClass});

    return (
        <div className={className}>
            <button className='counter__decrease' onClick={() => {
                if (quantity > 1) onDecrease()
            }}>
                <img src={icon_minus} alt=""/>
            </button>

            <div className='counter__quantity'>{quantity}</div>

            <button className='counter__increase' onClick={onIncrease}>
                <img src={icon_plus} alt=""/>
            </button>
        </div>
    )
};

Counter.propTypes = {
    quantity: PropTypes.number,
    onIncrease: PropTypes.func,
    onDecrease: PropTypes.func,
    parentClass: PropTypes.string,
};

export default Counter;