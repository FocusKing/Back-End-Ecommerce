const router = require('express').Router();
const {
  Category,
  Product
} = require('../../models');

router.get('/', (req, res) => {
  try {
    const categoryData = await Category.findAll({ include: [{ model: Product}, {model: tag}],
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
         include: [{ model: Product}, {model: tag}], 
        });

          if (!categoryData) {
            res.status(404).json({message: 'No category found with that id!'});
          return;
          };
    });


        // find one category by its `id` value
        // be sure to include its associated Products


        router.post('/', (req, res) => {
          // create a new category
        });

        router.put('/:id', (req, res) => {
          // update a category by its `id` value
        });

        router.delete('/:id', (req, res) => {
          // delete a category by its `id` value
        });