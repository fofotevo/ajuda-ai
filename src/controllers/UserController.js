const User = require('../models/user');

module.exports = {

    async index(req, res) {
        const users = await User.findAll();
        return res.json(users);
    },

    async create(req, res) {

        var { name, address, phone, members_family, impact, income, need, city, active } = req.body;
    
        const user = await User.create( 
        {   
            name, 
            address, 
            phone,
            members_family,
            impact, 
            income,
            need,
            city,
            active
        });

        return res.json(user);
    
    }
 
}