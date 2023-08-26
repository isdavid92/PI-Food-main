const DataTypes = require('sequelize');
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define(
    'diets',
    {
      id:{
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      name:{
        type: DataTypes.ENUM('glutenFree','ketogenic','vegetarian','lactoVegetarian','ovoVegetarian','vegan','pescetarian','paleo','primal','whole30'),
        allowNull: false
      }
    },
    { 
      timestamps: false,
      createdAt:false
    }
  );
};