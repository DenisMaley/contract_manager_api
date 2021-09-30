const compareObjects = (object1, object2, key, order) => {
    //TODO: Comparison of different data types gives unexpected results
    //TODO: Normalize data, e.g. strings toUpperCase
    const obj1 = object1[key];
    const obj2 = object2[key];

    if (obj1 < obj2) {
        return order;
    }
    if (obj1 > obj2) {
        return -1 * order;
    }
    return 0;
};

// Bonus task: sorting
const sortObjects = (items, req) => {
    if(req.query.sortBy && req.query.orderBy) {
        const sortBy = req.query.sortBy;
        const orderBy = req.query.orderBy === 'desc' ? 1 : -1;

        items.sort((item1, item2) => {
            return compareObjects(item1, item2, sortBy, orderBy);
        });
        return items;
    }
    return items;
};

module.exports = {
    sortObjects
};