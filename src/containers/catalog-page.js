import React, {Component} from 'react';
import {connect} from 'react-redux';
import {withRouter} from "react-router-dom";
import {compose} from "redux";

import {
    addProductFilter,
    fetchHelmets,
    fetchCategories,
    fetchActiveCategory,
    changeSortType,
    clearSearch,
    deleteAllFilters, showMore
} from "../actions";

import {getFilteredHelmets, getFilters} from "../selectors";

import Spinner from "../components/spinner";
import ErrorIndicator from "../components/error/error-indicator";
import Catalog from "../components/catalog/catalog";

class CatalogPage extends Component {

    componentDidMount() {
        this.props.fetchHelmets();
        this.props.fetchCategories();

        let activeCategory = this.props.match.params.categoryName || '';
        this.props.fetchActiveCategory(activeCategory)
    }

    componentDidUpdate(prevProps) {
        if (this.props.match.params.categoryName !== prevProps.match.params.categoryName) {
            this.props.fetchActiveCategory(this.props.match.params.categoryName || '')
        }
        //TODO: fix it
        if (prevProps.location.pathname === '/search' && this.props.location.pathname !== '/search') {
            this.props.clearSearch();
        }
        if (prevProps.location.pathname !== this.props.location.pathname) {
            this.props.deleteAllFilters();
        }
    }

    componentWillUnmount() {
        this.props.clearSearch();
    }

    render() {

        const {
            isLoading,
            isError,
            filters,
            addProductFilter,
            filteredHelmets,
            activeFilters,
            changeSortType,
            showMore,
            location:{pathname},

        } = this.props;

        if (isLoading) {
            return <Spinner/>
        }
        if (isError) {
            return <ErrorIndicator/>
        }

        return (
            <Catalog helmets={filteredHelmets}
                     filters={filters}
                     addProductFilter={addProductFilter}
                     activeFilters={activeFilters}
                     changeSortType={changeSortType}
                     pathname={pathname}
                     showMore={showMore}/>
        )
    }
}

const mapStateToProps = (state) => {
    const {catalog: {categories, isLoading, isError}, activeFilters} = state;

    return {
        /* categories,*/
        isLoading,
        isError,
        activeFilters,
        filteredHelmets: getFilteredHelmets(state),
        filters: getFilters(state),
    }
};

const mapDispatchToProps = {
    fetchHelmets,
    fetchCategories,
    fetchActiveCategory,
    addProductFilter,
    deleteAllFilters,
    changeSortType,
    clearSearch,
    showMore
};

export default compose(
    withRouter,
    connect(mapStateToProps, mapDispatchToProps)
)(CatalogPage);