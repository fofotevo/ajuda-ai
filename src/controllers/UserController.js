const User = require('../models/User');

module.exports = {

    async index(req, res) {
        const users = await User.findAll();
        return res.json(users);
        
    },

    async create(req, res) {

        var { name, address, phone, family_size, income, need, city, cpf } = req.body;
        console.log(address)
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

        return res.end('funcionou');
    
    },
    async delete(req,res) {
       
        const { id } = req.params;
        const user = await User.findOne({ where: { id: id } });

        user.destroy();

        return res.end('deletou');
    },
 
}