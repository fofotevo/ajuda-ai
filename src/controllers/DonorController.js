const Donor = require('../models/Donor');

module.exports = {

    async index(req, res) {
        const donor = await Donor.findAll();
        return res.json(donor);
        
    },

    async create(req, res) {

        var { name, email, phone } = req.body;
        await Donor.create( 
        {   
            name, 
            email, 
            phone
        });

        return res.redirect('/');
    
    },
    async delete(req,res) {
       
        const { id } = req.params;
        const donor = await Donor.findOne({ where: { id: id } });

        donor.destroy();

        return res.end('deletou');
    },
 
}