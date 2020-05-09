const { Model, DataTypes } = require ('sequelize');

class User extends Model {
    
    static init(sequelize){
        
        super.init({
            name: DataTypes.STRING,
            address: DataTypes.STRING,
            phone: DataTypes.STRING,
            family_size: DataTypes.INTEGER,
           
            need: DataTypes.STRING,
            cpf: DataTypes.STRING,
            description: DataTypes.STRING, 
            city: DataTypes.STRING
        }, 
        {
            sequelize
            
        });
    }
}

module.exports = User;