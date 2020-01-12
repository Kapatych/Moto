import React from 'react';
import './sizes.scss';
import classNames from "classnames";
import PropTypes from 'prop-types';

const Sizes = ({items, selected, onClickFunction}) => {

    if (!Array.isArray(selected)) selected = [selected];

    return (
        <div className='size'>
            {
                items.map((item, idx) => {
                    const className = classNames('size__item', {'size__item_active': selected.indexOf(item) !== -1});
                    return (
                        <div key={idx} className={className} data-size={item}
                             onClick={() => onClickFunction(item)}>
                            {item}
                        </div>
                    )
                })
            }
        </div>
    )
};

Sizes.propTypes = {
    items: PropTypes.array,
    selected: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
    onClickFunction: PropTypes.func,
};

export default Sizes;