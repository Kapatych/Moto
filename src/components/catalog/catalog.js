import React from 'react';
import './catalog.scss';
import CatalogItem from "./catalog-item";
import CatalogFilter from "./catalog-filter";
import CatalogSort from "./catalog-sort";


const Catalog = ({helmets, filters, addProductFilter, activeFilters, changeSortType, pathname, showMore}) => {

    const itemsPerPage = 4;
    const allPages = Math.ceil(helmets.length / itemsPerPage);
    const currentPage = activeFilters.currentPage;

    const renderCatalogList = () => {
        if (helmets.length === 0) {
            return <div className='text-center'>There is nothing! Try changing your search criteria.</div>
        } else {
            return helmets.slice(0, currentPage * itemsPerPage).map(helmet => <CatalogItem helmet={helmet} key={helmet.id}/>)
        }
    };

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
                {
                    (currentPage < allPages) &&
                    <button onClick={showMore} className='catalog__button button'>show more</button>
                }
            </div>
        </div>
    )
};




export default Catalog;