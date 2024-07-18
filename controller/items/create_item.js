const itemCollection = require('../../modules/items/item_collection')
const item = require('../../modules/items/item')

const createItem = (req, res) => {
    if (res) {
        const { name,
            image,
            descrption,
            category,
            price,
            user
        } = req.body
        itemCollection.push(new item(itemCollection.length, name, image, descrption, category, price, user))
        res.status(200).json({
            messgge:"sucess",
        })  
      }else{
        res.status(404).json({
            messgge:"sucess",
        })  
      }
}
module.exports = createItem