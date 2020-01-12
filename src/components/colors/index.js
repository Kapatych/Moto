import React from 'react';
import classNames from "classnames";
import PropTypes from 'prop-types';
import './colors.scss';

const Colors = ({items, selected, onClickFunction}) => {

    if (!Array.isArray(selected)) selected = [selected];

    return (
        <div className='colors'>
            {
                items.map((item, idx) => {
                    const className = classNames('colors__item', {'colors__item_active': selected.indexOf(item) !== -1});

                    return (
                        <div data-color={item}
                             key={idx}
                             className={className}
                             onClick={() => onClickFunction(item)}/>
                    )
                })
            }
        </div>
    )
};

Colors.propTypes = {
    items: PropTypes.array,
    selected: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.array,
    ]),
    onClickFunction: PropTypes.func,
};

export default Colors;