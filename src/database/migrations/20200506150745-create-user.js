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
            allowNull: false,
          },

          phone:{
            type: Sequelize.STRING,
            allowNull: false,
          },

          need:{
            type: Sequelize.STRING,
            allowNull:false,
          },

          family_size:{
            type: Sequelize.INTEGER,
            allowNull:false,
          },

          cpf:{
            type: Sequelize.STRING,
            allowNull: false,
          },

          city:{
            type: Sequelize.STRING,
            allowNull: false,
          },
          description:{
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
