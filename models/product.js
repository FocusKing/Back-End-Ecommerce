const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');

class Product extends Model {}

Product.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    product_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      validate: {
        isDecimal: true,
      },
    },
    stock: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 10,
      validate: {
        is:/^[0-9a-f]{64}$/i,
      },

      category_id: {
        type: DataTypes.INTEGER,
        type: DataTypes.INTEGER,
      references: {
        model: 'category',
        key: 'id',
      },
        // have to reference the category model's id!!
        
      
      },
    },
  },
  {
    hooks: {
      beforeCreate: async (newProduct) => {
        try {
          newProduct.number = await bcrypt.hash(newProduct.number, 10);
          return newProduct;
        } catch (err) {
          console.log(err);
          return err;
        }
      },
      beforeUpdate: async (updatedProduct) => {
        try {
          updatedProduct.number = await bcrypt.hash(
            updatedProduct.number,
            10
          );
          return updatedProduct;
        } catch (err) {
          console.log(err);
          return err;
        }
      },
    },
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product',
  }
);

module.exports = Product;
