import React, {useState} from 'react';
import PropTypes from 'prop-types';
import './catalog.scss';
import classNames from "classnames";
import CatalogItem from "./catalog-item";
import CatalogFilter from "./catalog-filter";
import CatalogSort from "./catalog-sort";


const Catalog = ({helmets, filters, addProductFilter, activeFilters, changeSortType, showMore}) => {

    const itemsPerPage = 8;
    const allPages = Math.ceil(helmets.length / itemsPerPage);
    const currentPage = activeFilters.currentPage;

    const renderCatalogList = () => {
        if (helmets.length === 0) {
            return <div className='text-center'>There is nothing! Try changing your search criteria.</div>
        } else {
            return helmets.slice(0, currentPage * itemsPerPage).map(helmet => <CatalogItem helmet={helmet} key={helmet.id}/>)
        }
    };

    const [mobileSidebar, setMobileSidebar] = useState('');
    const className = classNames(`catalog__sidebar sidebar ${mobileSidebar}`);

    return (
        <div className='catalog'>
            <div className={className}>
                <CatalogFilter filters={filters} activeFilters={activeFilters} addProductFilter={addProductFilter} setMobileSidebar={setMobileSidebar}/>
                <div className='menu__close' onClick={() => setMobileSidebar('')}/>
            </div>
            <div className='catalog__content content'>
                <div className='catalog__top-block'>
                    <div className='catalog__title'>
                        {
                            activeFilters.search ? `Results for '${activeFilters.search}'` :
                            activeFilters.category ? activeFilters.category.split('-').join(' ') :
                            'all helmets'
                        }
                    </div>
                    <CatalogSort activeFilters={activeFilters}
                                 changeSortType={changeSortType}
                                 setMobileSidebar={setMobileSidebar}/>
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

Catalog.propTypes = {
    helmets: PropTypes.array,
    filters: PropTypes.object,
    activeFilters: PropTypes.object,
    addProductFilter: PropTypes.func,
    changeSortType: PropTypes.func,
    showMore: PropTypes.func,
};



export default Catalog;