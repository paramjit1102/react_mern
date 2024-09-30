// models/user.js

module.exports = (sequelize, DataTypes) => {
    const Products = sequelize.define('products', {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      description: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      price:{
        type:DataTypes.STRING,
        allowNull:false
      }
    });
  
    return Products;
  };
  