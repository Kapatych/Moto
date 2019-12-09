import React from 'react';
import classNames from "classnames";
import './colors.scss';

const Colors = ({items, selected, onClickFunction}) => {

    if (!Array.isArray(selected)) selected = [selected];
    return (
        <div className='colors'>
            {/*<div className='colors__name'>{selected.split('-').join(' ')}</div>*/}
            <div className='colors__list'>
                {
                    items.map((item, idx) => {
                        const className = classNames('colors__item', {'colors__item_active': selected.indexOf(item) !== -1});

                        return (
                            <div key={idx} className={className}
                                 onClick={() => onClickFunction(item)}>
                                <div data-color={item} className='colors__item-color'/>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
};

export default Colors;