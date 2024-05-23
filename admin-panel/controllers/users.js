const sendAllUsers = (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify(req.usersArray));
  };
  
  // controllers/users.js
  const sendUserCreated = (req, res) => {
      res.setHeader("Content-Type", "application/json");
      res.end(JSON.stringify(req.user));
    };
  
    const sendUserById = (req, res) => {
      res.setHeader("Content-Type", "application/json");
      res.end(JSON.stringify(req.user));
    };
  
    const sendUserDeleted = (req, res) => {
      res.setHeader("Content-Type", "application/json");
      res.end(JSON.stringify(req.user));
    };
  
  const sendUserUpdated = (req, res) => {
    res.setHeader("Content-Type", "application/json");
    res.end({ message: "Пользователь обновлён" });
  };
  
  const sendMe = (req, res) => {
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify(req.user));
  };
  
  module.exports = {
      sendAllUsers,
      sendUserCreated,
      sendUserById,
      sendUserDeleted,
      sendUserUpdated,
      sendMe
  };