const User = require('../models/User');

module.exports = {

    async index(req, res) {
        const users = await User.findAll();
        return res.render('casos', {users: users});
    },

    async create(req, res) {

        var { name, address, phone, family_size, income, need, city, cpf ,description} = req.body;
        
        await User.create( 
        {   
            name, 
            address, 
            phone,
            family_size,
            income,
            need,
            city,
            cpf,
            description
        });

        return res.end('criado com sucesso');
    
    },

    async delete(req,res) {
       
        const { id } = req.params;
        const user = await User.findOne({ where: { id: id } });

        user.destroy();

        return res.status(204).redirect('/');
    },
 
}