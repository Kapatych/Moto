import React from 'react';
import classNames from 'classnames';
import './catalog-filter.scss';
import Sizes from "../sizes";
import Colors from "../colors";
import CatalogFilterSection from "./catalog-filter-section";

const CatalogFilter = ({filters, addProductFilter, activeFilters, setMobileSidebar}) => {

    const {size, color, brand} = filters;

    return (
        <div className='catalog__filter filter'>

            <CatalogFilterSection type='brand' activeFilters={activeFilters} resetFilter={addProductFilter}>
                <div className='brand'>
                    {
                        brand.map((value, idx) => {
                            const itemClass = classNames(
                                'brand__item',
                                {'brand__item_active': activeFilters.brand.indexOf(value) !== -1,}
                            );
                            return (
                                <div key={idx} className={itemClass}
                                     onClick={() => addProductFilter({type: 'brand', value: value})}>
                                    {value}
                                </div>
                            )
                        })
                    }
                </div>
            </CatalogFilterSection>

            <CatalogFilterSection type='color' activeFilters={activeFilters} resetFilter={addProductFilter}>
                <Colors items={color} selected={activeFilters.color}
                        onClickFunction={(value) => addProductFilter({type: 'color', value: value})}/>
            </CatalogFilterSection>

            <CatalogFilterSection type='size' activeFilters={activeFilters} resetFilter={addProductFilter}>
                <Sizes items={size} selected={activeFilters.size}
                       onClickFunction={(value) => addProductFilter({type: 'size', value: value})}/>
            </CatalogFilterSection>

            <button className='button filter__button' onClick={()=> setMobileSidebar('')}>Filter</button>

        </div>
    )
};

export default CatalogFilter;