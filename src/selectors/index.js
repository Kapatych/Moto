import {createSelector} from "reselect";

export const getHelmets = (state) => {
    return state.catalog.helmets;
};

const getAllCategories = (state) => {
    return state.catalog.categories;
};

const getActiveCategory = (state) => {
    return state.activeFilters.category;
};

export const getActiveCategoryId = createSelector(
    [getAllCategories, getActiveCategory],
    (allCategories, categoryUrl) => {
        const categoryName = categoryUrl.split('-').join(' ');
        const category = allCategories.find((item) => item.name.toLowerCase() === categoryName) || {};

        return category.id;
    }
);

export const getHelmetsFilters = createSelector(
    [getHelmets, getActiveCategoryId],
    (helmets, activeCategoryId) => {
        let filters = {
            brand: [],
            color: [],
            size: []
        };

        let activeHelmets;

        if (activeCategoryId) {
            activeHelmets = helmets.filter((helmet) => helmet.categories.indexOf(activeCategoryId) !== -1);
        } else {
            activeHelmets = [...helmets]
        }

        activeHelmets.map((helmet) => {

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

export const getFilteredHelmets = (helmets, activeFilters, state) => {
    let result = [...helmets];

    const activeCategoryId = getActiveCategoryId(state);

    if (activeCategoryId) {
        result = result.filter((item) => item.categories.indexOf(activeCategoryId) !== -1)
    }

    if (activeFilters.brand.length !== 0) {
        result = result.filter((item) => activeFilters.brand.indexOf(item.brand) !== -1)
    }

    if (activeFilters.color.length !== 0) {
        result = result.filter((item) => {
            for (let i = 0; i < item.colors.length; i++) {
                if (activeFilters.color.indexOf(item.colors[i]) !== -1) return true;
            }
            return false;
        })
    }

    if (activeFilters.size.length !== 0) {
        result = result.filter((item) => {
            for (let i = 0; i < item.sizes.length; i++) {
                if (activeFilters.size.indexOf(item.sizes[i]) !== -1) return true;
            }
            return false;
        })
    }

    switch (activeFilters.sort) {
        case 'titleASC':
            return result.sort((a, b) => (a.title > b.title) ? 1 : -1);
        case 'titleDESC':
            return result.sort((a, b) => (a.title < b.title) ? 1 : -1);
        case 'priceDESC':
            return result.sort((a, b) => b.price - a.price);
        default:
            return result.sort((a, b) => a.price - b.price);
    }
};