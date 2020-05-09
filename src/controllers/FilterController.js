const User = require('../models/User');


module.exports = {

    async index(req, res) {
        
        const { id } = req.query;
        
        const user =  await User.findOne({ where: {id: id}});
        firt_name = user.name.split(' ')
        
        res.render('doar',{user:user, firt_name : firt_name[0]})
        
    }

}