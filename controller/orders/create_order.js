const orders = require('../../modules/orders/oreder')

const createItem = (req, res) => {
    if (res) {
       const {userId}=req.query
        const userOrders = orderCollection.filter(order => order.userId === userId);
        
      res.send()
    }
}
module.exports = createItem