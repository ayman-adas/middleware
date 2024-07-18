const itemCollection = require('../../modules/items/item_collection')
const displayItems = (req, res) => {
    if (res) {
       res.send(itemCollection)
    }
}
module.exports=displayItems