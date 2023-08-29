const DataTypes = require('sequelize');
module.exports = (sequelize) => {
  // defino el modelo
  const Diet = sequelize.define(
    'diet',
    {
      id:{
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      name:{
        type: DataTypes.STRING,
        allowNull: false
      },
      info:{
        type: DataTypes.TEXT
      }
    },
    { 
      timestamps: false,
      createdAt:false
    }
  );
};
