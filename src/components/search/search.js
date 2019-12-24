import React from 'react';
import './search.scss';
import classNames from "classnames";

const Search = ({searchProduct, deleteAllFilters, history, mobileSearch, setMobileSearch}) => {

    const [searchText, setSearchText] = React.useState('');

    const searching = (e) => {
        e.preventDefault();

        if (searchText !== '') {
            deleteAllFilters();
            searchProduct(searchText);
            setSearchText('');
            setMobileSearch('');
            history.push('/search')
        }
    };

    const className = classNames(mobileSearch);

    return (
        <form className={`search ${className}`} onSubmit={searching}>
            <input type="text"
                   placeholder='search'
                   className='search__text'
                   value={searchText}
                   onChange={(e) => setSearchText(e.target.value)}/>
            <button type='submit' className='search__button'/>
        </form>
    )
};

export default Search;