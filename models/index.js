const Category = require('./Category');
const Product = require('./Product');
const Tag= require('./Tag');
const productTag= require('./producttag');
const Category = require('./Category');

Tag.hasOne(productTag, {
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

productTag.belongsTo(Tag, {
  foreignKey: 'reader_id',
});

module.exports = { Tag, Category, Product };
