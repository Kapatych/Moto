import React from 'react';
import './catalog-sort.scss';

const CatalogSort = ({activeFilters, changeSortType}) => {
    return (
        <div className='catalog__sort sort'>
            <span className='sort__title'>sort by</span>
            <select className='sort__select'
                    value={activeFilters.sort}
                    onChange={(e) => changeSortType(e.target.value)}>
                <option value="priceASC">price, a-z</option>
                <option value="priceDESC">price, z-a</option>
                <option value="titleASC">name, a-z</option>
                <option value="titleDESC">name, z-a</option>
            </select>
        </div>
    )
};

export default CatalogSort;