const User = require('../models/User');


module.exports = {

    async index(req, res) {
        
        const  { id } = req.query;
        
        const user =  await User.findOne({ where: { id: id } });
        var first_name = user.name.split(' ');
        var date = user.createdAt;
        date = date.toString();
        console.log(date);
        date = date.split('2020');
        date = date[0]+" 2020";
        console.log(date);
        return res.render('doar', { user: user, first_name : first_name[0], date:date });
        
    }

}