const Category = require('./category');
const Product = require('./product');
const Tag= require('./tag');
const ProductTag= require('./productTag');


Tag.hasOne(ProductTag, {
  foreignKey: 'tag_id',
  onDelete: 'CASCADE',
});

Tag.hasMany(Category, {
  foreignKey: 'tag_id',
  onDelete: 'CASCADE',
});

Category.belongsTo(Tag, {
  foreignKey: 'tag_id',
});

ProductTag.belongsTo(Tag, {
  foreignKey: 'tag_id',
});

module.exports = { Tag, Category, Product };
