import React, {Component} from 'react';
import {connect} from 'react-redux';
import {withRouter} from "react-router-dom";
import {compose} from "redux";

import {addProductFilter, fetchHelmets, fetchCategories, fetchActiveCategory, changeSortType} from "../actions";
import {
    getFilteredHelmets,
    getHelmetsFilters
} from "../selectors";

import Spinner from "../components/spinner";
import ErrorIndicator from "../components/error/error-indicator";
import Catalog from "../components/catalog/catalog";

class CatalogPage extends Component{

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
        } = this.props;

        if (isLoading){
            return <Spinner />
        }
        if (isError){
            return <ErrorIndicator />
        }

        return (
            <Catalog helmets={filteredHelmets}
                     filters={filters}
                     addProductFilter={addProductFilter}
                     activeFilters={activeFilters}
                     changeSortType={changeSortType}/>
        )
    }
}

const mapStateToProps = (state) => {
    const {catalog: {helmets, categories, isLoading, isError}, activeFilters} = state;

    return {
        categories,
        isLoading,
        isError,
        activeFilters,
        filteredHelmets: getFilteredHelmets(helmets, activeFilters, state),
        filters: getHelmetsFilters(state),
    }
};

const mapDispatchToProps = {
    fetchHelmets,
    fetchCategories,
    addProductFilter,
    fetchActiveCategory,
    changeSortType
};

export default compose(
    withRouter,
    connect(mapStateToProps, mapDispatchToProps)
)(CatalogPage);