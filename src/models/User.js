const {Model,DataTypes} = require ('sequelize');

class User extends Model {
    static init(sequelize){
        super.init({
            name: DataTypes.STRING,
            address: DataTypes.STRING,
            phone: DataTypes.STRING,
            membres_family: DataTypes.INTEGER,
            impact: DataTypes.STRING,
            income: DataTypes.STRING,
            need: DataTypes.STRING,
            
            city: DataTypes.STRING

        }, {
            sequelize
        })
    }

}

module.exports = User;