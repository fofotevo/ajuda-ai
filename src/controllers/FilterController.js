const User = require('../models/User');


module.exports = {

    async index(req, res) {
        
        const { id } = req.query;
        
        const users =  await User.findOne({ where: {id: id}});

        res.json(users)
    }

}