const router = require('express').Router();
const {
  Category,
  Product
} = require('../../models');

router.get('/', (req, res) => {
  try {
    const categoryData = await Category.findAll({
      include: [{
        model: Product,
        attributes: ['id','product_name','price','stock','category_id']
      }, {
        model: tag
      }],
    });
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});
// find all categories
// be sure to include its associated Products


router.get('/:id', async (req, res) => {
  try {
    const categoryData = await Category.findByPk(req.params.id, {
      include: { model: Product,
        attributes:['id','product_name','price','stock','category_id']
      }
    });

    if (!categoryData) {
      res.status(404).json({
        
        message: 'No category found with that id!'
      });
      return;
    };
  } catch (err) {
    res.status(500).json(err);
  }
});


// find one category by its `id` value
// be sure to include its associated Products

 // create a new category with the function below.
router.post('/', (req, res) => {
 try {
  const categoryData = await Category.create(req.body);
  res.status(200).json(categoryData);
 } catch (err) {
  res.status(500).json(err);
 }
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
});