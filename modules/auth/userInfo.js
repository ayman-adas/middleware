 class ModelUserInfo {
    constructor(username, email, pass, address, contact, role) {
        this.username = username;
        this.email = email;
        this.pass = pass;
        this.address = address;
        this.contact = contact;
        this.role = role;
    }

    // Optionally, you can add methods to interact with the user info
    getUserInfo() {
        return {
            username: this.username,
            email: this.email,
            address: this.address,
            contact: this.contact,
            role: this.role
        };
    }

    updateUserInfo({ username, email, pass, address, contact, role }) {
        if (username) this.username = username;
        if (email) this.email = email;
        if (pass) this.pass = pass;
        if (address) this.address = address;
        if (contact) this.contact = contact;
        if (role) this.role = role;
    }
}
module.exports=ModelUserInfo