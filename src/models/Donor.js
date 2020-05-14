const { Model, DataTypes } = require ('sequelize');

class Donor extends Model {
    
    static init(sequelize){
        super.init({
            name: DataTypes.STRING,
            email: DataTypes.STRING,
            phone: DataTypes.STRING,
            
        }, 
        {
            sequelize
        });
    }
}

module.exports = Donor;