class ModelItem{
    constructor(id,name, image, description, price, category, user) {
        this.id = id;

        this.name = name;
        this.image = image;
        this.description = description;
        this.price = price;
        this.category = category;
        this.user = user;
    }

    // Optionally, you can add methods to interact with the user info
    getItemnfo() {
        return {
            id:this.id,
            name: this.name,
            image: this.image,
            description: this.description,
            category: this.contact,
            price: this.price,
            user: this.user

        };
    }

    updateItemInfo({ name, image, description, contact, price }) {
        if (name) this.name = name;
        if (image) this.image = image;
        if (description) this.description = description;
        if (contact) this.contact = contact;
        if (price) this.price = price;

    }
}
module.exports=ModelItem