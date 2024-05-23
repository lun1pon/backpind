const sendAllCategories = (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify(req.categoriesArray));
  };
  
  // controllers/categories.js
  const sendCategoryCreated = (req, res) => {
      res.setHeader("Content-Type", "application/json");
      res.end(JSON.stringify(req.category));
    };
  
    const sendCategoryById = (req, res) => {
      res.setHeader("Content-Type", "application/json");
      res.end(JSON.stringify(req.category));
    };
  
    const sendCategoryDeleted = (req, res) => {
      res.setHeader("Content-Type", "application/json");
      res.end(JSON.stringify(req.category));
    };
  
  const sendCategoryUpdated = (req, res) => {
    res.setHeader("Content-Type", "application/json");
    res.end({ message: "Категория обновлена" });
  };
  
  module.exports = {
      sendAllCategories,
      sendCategoryCreated,
      sendCategoryById,
      sendCategoryDeleted,
      sendCategoryUpdated
  };
  