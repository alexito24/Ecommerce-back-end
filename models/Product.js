// import important parts of sequelize library
const { Model, DataTypes } = require('sequelize');
// import our database connection from config.js
const sequelize = require('../config/connection');

// Initialize Product model (table) by extending off Sequelize's Model class
class Product extends Model {}

// set up fields and rules for Product model
Product.init(
  {
    // define columns
    id:{
      type: DataTypes.INTERGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    product_name:{
      type: DataTypes.STRING,
      allowNull: false,
    },
    price:{
      type: DataTypes.INTERGER,
      allowNull: false,
    },
    stock:{
      type: DataTypes.INTERGER,
      allowNull: false,
    },
    //this column will store a reference of the 'id' of the 'Category' it belongs to.
    category_id:{
      type: DataTypes.INTEGER,
      references: {
        // This references the `Category` model, which we set in `Category.js` as its `modelName` property
        model: 'Category',
        key: 'id',
      },
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product',
  }
);

module.exports = Product;
