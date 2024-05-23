const categoriesRouter = require('express').Router();

const {
    findAllCategories,
    createCategory,
    findCategoryById,
    deleteCategory,
    checkEmptyName,
    checkIsCategoryExists,
    updateCategory
  } = require('../middlewares/categories');
const {
    sendAllCategories,
    sendCategoryCreated,
    sendCategoryById,
    sendCategoryDeleted,
    sendCategoryUpdated
} = require('../controllers/categories');

categoriesRouter.get("/categories/:id", findCategoryById, sendCategoryById);

categoriesRouter.post(
  "/categories",
  findAllCategories,
  checkIsCategoryExists,
  checkEmptyName,
  createCategory,
  sendCategoryCreated
);
categoriesRouter.put(
  "/categories/:id",
  checkEmptyName,
  updateCategory,
  sendCategoryUpdated
);
categoriesRouter.delete(
  "/categories/:id",
  deleteCategory,
  sendCategoryDeleted
);

module.exports = categoriesRouter;