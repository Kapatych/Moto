import mockHelmets from "./mockHelmets";
import mockCategories from "./mockCategories";

export const fetchHelmets = async () => {
    return new Promise( (resolve, reject) => {
        setTimeout( () => {
            resolve(mockHelmets)
        }, 400);

    })
};

export const fetchHelmetItem = async (id) => {
    return new Promise( (resolve, reject) => {
        setTimeout( () => {
            const item = mockHelmets.find( (item)=> item.id === id);
            return resolve(item);
        }, 400);

    })
};

export const fetchHelmetItemByName = async (name) => {
    return new Promise( (resolve, reject) => {
        setTimeout( () => {
            const item = mockHelmets.find( (item)=> item.title === name);
            return resolve(item);
        }, 400);

    })
};

export const fetchCategories = async () => {
    return new Promise( (resolve, reject) => {
        setTimeout( () => {
            resolve(mockCategories)
        }, 400);

    })
};
