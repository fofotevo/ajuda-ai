const User = require('../models/User');


module.exports = {

    async index(req, res) {
        
        const  { id } = req.query;
        
        const user =  await User.findOne({ where: { id: id } });
        var first_name = user.name.split(' ');
        
        return res.render('doar', { user: user, first_name : first_name[0] });
        
    }

}