const {DataTypes} = require ('sequelize');

module.exports = (sequelize) => {
 sequelize.define('Geren', {
   id:{
    type: DataTypes.UUID,
    primaryKey: true,
    deaultValues: DataTypes.UUIDV4,
    allowNull: false,
   }, 
   name:{
    type: DataTypes.STRING,
    allowNull: false,
   },
 });
}