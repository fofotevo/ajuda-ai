const User = require('../models/User');


module.exports = {

    async index(req, res) {
        
        const { id } = req.query;
        
        const user =  await User.findOne({ where: {id: id}});

        res.render('doar',{user:user})
    }

}