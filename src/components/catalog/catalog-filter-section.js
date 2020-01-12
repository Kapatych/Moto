import React from 'react';
import PropTypes from 'prop-types';
import './catalog-filter-section.scss';

const CatalogFilterSection = ({children, type, activeFilters, resetFilter}) => {
    return (
        <div className='filter__section'>
            <div className='filter__section-header'>
                <div className='filter__section-title title'>{`${type}s`}</div>
                {activeFilters[type].length > 0 &&
                <div className='filter__section-reset link'
                     onClick={() => resetFilter({type: type, value: 'reset'})}>Reset</div>
                }
            </div>
            {children}
        </div>
    )
};

CatalogFilterSection.propTypes = {
    children: PropTypes.object,
    type: PropTypes.string,
    activeFilters: PropTypes.object,
    resetFilter: PropTypes.func
};

export default CatalogFilterSection;