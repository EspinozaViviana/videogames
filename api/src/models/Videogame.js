const { DataTypes } = require('sequelize');
//const { addListener } = require('../app');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Videogame', {
    id:{
      type: DataTypes.UUID,
      defaultValues: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    platforms:{
      type: DataTypes.STRING,
      allowNull: false,
    },
    image:{
      type:DataTypes.STRING,
      allowNull: false,
    },
    relase:{
      type: DataTypes.DATE,
      allowNull: false,
    },
    rating: {
       type: DataTypes.FLOAT,
       allowNull: false,
    },
  },
  {
    timestamps: false
 });
};
