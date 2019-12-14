import React from 'react';
import './search.scss';

const Search = ({searchProduct, deleteAllFilters, history}) => {

    const [searchText, setSearchText] = React.useState('');

    const searching = (e) => {
        e.preventDefault();
        deleteAllFilters();
        searchProduct(searchText);
        setSearchText('');
        history.push('/search')
    };

    return (
        <form className='header__search search' onSubmit={searching}>

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