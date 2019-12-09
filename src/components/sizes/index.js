import React from 'react';
import './sizes.scss';
import classNames from "classnames";

const Sizes = ({items, selected, onClickFunction}) => {

    if (!Array.isArray(selected)) selected = [selected];

    return (
        <div className='size'>
            {
                items.map((item, idx) => {
                    const className = classNames('size__item', {'size__item_active': selected.indexOf(item) !== -1});
                    return (
                        <div key={idx} className={className}
                             onClick={() => onClickFunction(item)}>
                            {item}
                        </div>
                    )
                })
            }
        </div>
    )
};

export default Sizes;