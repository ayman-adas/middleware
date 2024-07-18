const itemCollection = require('../../modules/items/item_collection')
const deleteItem = (req, res) => {
    if (res) {
        const {
            id,
        } = req.body
        const index = itemCollection.findIndex(item => item.id === id);
        if (index !== -1) {
            itemCollection.splice(index, 1);
            return true; // Item found and deleted
        }
        return false; // Item not found
    };


}
module.exports = deleteItem