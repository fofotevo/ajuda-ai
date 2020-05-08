const User = require('../models/user');

module.exports = {

    async index(req, res) {
        const users = await User.findAll();
        return res.json(users);
    },

    async create(req, res) {

        var { name, address, phone, family_size, income, need, city, cpf } = req.body;
        console.log(name)
        await User.create( 
        {   
            name, 
            address, 
            phone,
            family_size,
            income,
            need,
            city,
            cpf
        });

        return res.rend('/');
    
    }
 
}