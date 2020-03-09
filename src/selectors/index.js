import {createSelector} from "reselect";

export const getAllHelmets = (state) => {
    return state.catalog.helmets;
};

const getAllCategories = (state) => {
    return state.catalog.categories;
};

const getActiveCategory = (state) => {
    return state.activeFilters.category;
};

const getActiveSearch = (state) => {
    return state.activeFilters.search.toLowerCase()
};

const getActiveBrand = (state) => {
    return state.activeFilters.brand
};

const getActiveColor = (state) => {
    return state.activeFilters.color
};

const getActiveSize = (state) => {
    return state.activeFilters.size
};

const getActiveSort = (state) => {
    return state.activeFilters.sort
};

export const getActiveCategoryId = createSelector(
    [getAllCategories, getActiveCategory],
    (allCategories, categoryUrl) => {
        const categoryName = categoryUrl.split('-').join(' ');
        const category = allCategories.find((item) => item.name.toLowerCase() === categoryName) || {};

        return category.id;
    }
);

export const getActiveHelmets = createSelector(
    [getAllHelmets, getActiveCategoryId, getActiveSearch],
    (allHelmets, activeCategoryId, activeSearch) => {
        let result = allHelmets.filter( item => item.title.toLowerCase().includes(activeSearch));
        if (activeCategoryId) {
            result = result.filter((helmet) => helmet.categories.indexOf(activeCategoryId) !== -1);
        }
        return result
    }
);

export const getFilters = createSelector(
    [getActiveHelmets],
    (helmets) => {

        let filters = {
            brand: [],
            color: [],
            size: []
        };

        helmets.map((helmet) => {

            if (filters.brand.indexOf(helmet.brand) === -1) {
                filters.brand.push(helmet.brand)
            }

            for (let i = 0; i < helmet.colors.length; i++) {
                if (filters.color.indexOf(helmet.colors[i]) === -1) {
                    filters.color.push(helmet.colors[i])
                }
            }

            for (let i = 0; i < helmet.sizes.length; i++) {
                if (filters.size.indexOf(helmet.sizes[i]) === -1) {
                    filters.size.push(helmet.sizes[i])
                }
            }
            return filters;
        });

        return filters;
    }
);

export const getFilteredHelmets = createSelector(
    [getActiveHelmets, getActiveBrand, getActiveColor, getActiveSize, getActiveSort],
    (activeHelmets, activeBrand, activeColor, activeSize, activeSort) => {
        let result = activeHelmets;

        if (activeBrand.length !== 0) {
            result = result.filter((item) => activeBrand.indexOf(item.brand) !== -1)
        }

        if (activeColor.length !== 0) {
            result = result.filter((item) => {
                for (let i = 0; i < item.colors.length; i++) {
                    if (activeColor.indexOf(item.colors[i]) !== -1) return true;
                }
                return false;
            })
        }

        if (activeSize.length !== 0) {
            result = result.filter((item) => {
                for (let i = 0; i < item.sizes.length; i++) {
                    if (activeSize.indexOf(item.sizes[i]) !== -1) return true;
                }
                return false;
            })
        }

        switch (activeSort) {
            case 'titleASC':
                return result.sort((a, b) => (a.title > b.title) ? 1 : -1);
            case 'titleDESC':
                return result.sort((a, b) => (a.title < b.title) ? 1 : -1);
            case 'priceDESC':
                return result.sort((a, b) => b.price - a.price);
            default:
                return result.sort((a, b) => a.price - b.price);
        }

    }
);

