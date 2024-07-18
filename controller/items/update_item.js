const itemCollection = require('../../modules/items/item_collection')
const updateItem = (req, res) => {
    if (res) {
        const {
            id,specificUpdate,
        } = req.body
        const item = itemCollection.find(item => item.id === id);
        if (item) {
            Object.keys(updatedProperties).forEach(key => {
                if (item.hasOwnProperty(key)) {
                    item[key] = updatedProperties[key];
                }
            });
            return item; // Item found and updated
        }
        return null; //
    }
}
module.exports = updateItem