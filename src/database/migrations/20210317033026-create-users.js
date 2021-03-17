'use strict';

const { QueryInterface } = require("sequelize/types");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('users',{
          id:{
            type: Sequelize.INTEGER,
            primarykey: true,
            autoIncrement:true,
            allowNull: false,
          },
          name: {
            type: Sequelize.STRING,
            allowNull:false,
          },
          email: {
            type: Sequelize.STRING,
            unique:true,
            allowNull:false,
          },
          password_hash:{
            type : Sequelize.STRING,
            allowNull:false,
          },
          created_at:{
            type: Sequelize.DATA,
            allowNull:false,
          },
          updated_at:{
            type: Sequelize.DATA,
            allowNull:false,
          }
    })
  },

  down: async (queryInterface, Sequelize) => {
      return queryInterface.dropTable('users');
  }
};
