const { UUIDV4, Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class productTag extends Model {}

productTag.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    tag_number: {
      type: DataTypes.UUID,
      defaultValue: UUIDV4,
    },
    tag_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'tag',
        key: 'id',
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'productTag',
  }
);

module.exports = productTag;
