const {Model,DataTypes} = require ('sequelize');

class User extends Model {
    static init(sequelize){
        super.init({
            name: DataTypes.STRING,
            address: DataTypes.STRING,
            phone: DataTypes.STRING,
            membres_family: DataTypes.DECIMAL,
            impact: DataTypes.STRING,
            income: DataTypes.STRING,
            need: DataTypes.STRING,
            active: DataTypes.BOOLEAN,
            city: DataTypes.STRING

        }, {
            sequelize
        })
    }

}

module.exports = User;