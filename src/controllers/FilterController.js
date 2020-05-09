const User = require('../models/User');


module.exports = {

    async index(req, res) {
        
        const { id } = req.params;
        
        const user =  await User.findOne({ where: { id: id } });
        var first_name = user.name.split(' ');
        
        return res.status(200).render('doar', { user: user, first_name : first_name[0] });
        
    }

}