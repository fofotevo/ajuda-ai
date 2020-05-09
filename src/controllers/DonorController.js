const Donor = require('../models/Donor');

module.exports = {

    async index(req, res) {
        const donor = await Donor.findAll();
        return res.json(donor);
        
    },

    async create(req, res) {

        var { name, email, phone } = req.body;
        console.log(Donor)
        await Donor.create( 
        {   
            name, 
            email, 
            phone
        });

        return res.end('funcionou');
    
    },
    async delete(req,res) {
       
        const { id } = req.params;
        const donor = await Donor.findOne({ where: { id: id } });

        donor.destroy();

        return res.end('deletou');
    },
 
}