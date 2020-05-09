const User = require('../models/User');

module.exports = {

    async index(req, res) {
        const users = await User.findAll();
        return res.render('casos', {users: users});
    },

    async create(req, res) {

        var { name, address, phone, family_size, need, city, cpf ,description} = req.body;
        
        await User.create( 
        {   
            name, 
            address, 
            phone,
            family_size,
            need,
            city,
            cpf,
            description
        });

        const users = await User.findAll();

        return res.render('casos', { users: users, created: 'created' });
    
    },

    async delete(req, res) {
       
        const { id } = req.params;
        const user = await User.findOne({ where: { id: id } });

        user.destroy();

        return res.status(204).redirect('/');
    },
 
}