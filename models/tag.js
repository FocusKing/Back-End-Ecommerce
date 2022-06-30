const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');

class Tag extends Model {}

Tag.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1],
      },
    },
  },
  {
    hooks: {
      beforeCreate: async (newReader) => {
        try {
          newTag.number = await bcrypt.hash(newTag.number, 10);
          return newTag;
        } catch (err) {
          console.log(err);
          return err;
        }
      },
      beforeUpdate: async (updatedTag) => {
        try {
          updatedTag.number = await bcrypt.hash(
            updatedTag.number,
            10
          );
          return updatedTag;
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
    modelName: 'tag',
  }
);

module.exports = Tag;
