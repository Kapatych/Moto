import React from 'react';
import './catalog.scss';
import CatalogItem from "./catalog-item";
import CatalogFilter from "./catalog-filter";
import CatalogSort from "./catalog-sort";


const Catalog = ({helmets, filters, addProductFilter, activeFilters, changeSortType}) => {
    return (
        <div className='catalog'>
            <div className='narrow-column'>
                <CatalogFilter filters={filters} activeFilters={activeFilters} addProductFilter={addProductFilter}/>
            </div>
            <div className='wide-column '>
                <div className='catalog__top-block'>
                    <div className='catalog__title'>
                        {
                            activeFilters.search ? `Results for '${activeFilters.search}'` :
                            activeFilters.category ? activeFilters.category.split('-').join(' ') :
                            'all helmets'
                        }
                    </div>
                    <CatalogSort activeFilters={activeFilters} changeSortType={changeSortType}/>
                </div>
                <div className='catalog__list'>
                    {renderCatalogList(helmets)}
                </div>
            </div>
        </div>
    )
};

const renderCatalogList = (helmets) => {
    if (helmets.length === 0) {
        return <div className='text-center'>There is nothing! Try changing your search criteria.</div>
    } else {
        return helmets.map(helmet => <CatalogItem helmet={helmet} key={helmet.id}/>)
    }
};

export default Catalog;