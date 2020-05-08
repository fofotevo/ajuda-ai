const { Model, DataTypes } = require ('sequelize');

class User extends Model {
    
    static init(sequelize){
        
        super.init({
            name: DataTypes.STRING,
            address: DataTypes.STRING,
            phone: DataTypes.STRING,
            family_size: DataTypes.INTEGER,
            income: DataTypes.STRING,
            need: DataTypes.STRING,
            cpf: DataTypes.STRING, 
            city: DataTypes.STRING
        }, 
        {
            sequelize
            
        });
    }
}

module.exports = User;