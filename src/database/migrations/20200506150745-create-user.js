'use strict';

const sequelize = require('sequelize');

module.exports = {
  up: (queryInterface, Sequelize) => {
    
      return queryInterface.createTable('users', { 
        id: {
          type: Sequelize.INTEGER ,
          primaryKey:true,
          autoIncrement:true,
          allowNull:false,
          },

          name:{
            type: Sequelize.STRING,
            allowNull: false
          },

          address:{
            type: Sequelize.STRING,
            allowNull:false,
          },
          phone:{
            type: Sequelize.STRING,
          },
          active:{
            type: Sequelize.BOOLEAN,
            
          },

          need:{
            type: Sequelize.STRING,
            allowNull:false,
          },

          membres_family:{
            type: Sequelize.DECIMAL,
            allowNull:false,
          },
          impact:{
            type: Sequelize.STRING,
            allowNull: false,
          },

          

          income:{
            type: Sequelize.STRING,
            allowNull: false,
          },

          created_at:{
            type: Sequelize.DATE,
            defaultValue: sequelize.literal('NOW()'),
            allowNull:false,
          },

          updated_at:{
            type: Sequelize.DATE,
            defaultValue: sequelize.literal('NOW()'),
            allowNull:false,
          },
       });
    
  },

  down: (queryInterface, Sequelize) => {

      return queryInterface.dropTable('users');
    
  }
};
