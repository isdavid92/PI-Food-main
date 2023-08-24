const DataTypes = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define(
    'recipe',
    {
      id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        defaultValue: 785
      },
      name:{
        type: DataTypes.STRING,
        unique: true,
        allowNull: false
      },
      image:{
        type: DataTypes.STRING,
        allowNull:false
      },
      summary:{
        type: DataTypes.STRING,
        allowNull:false
      },
      health_score:{
        type: DataTypes.INTEGER
      },
      steps:{
        type: DataTypes.STRING
      }
    },
    { 
      timestamps: false,
      createdAt:false
    }
  );
};

