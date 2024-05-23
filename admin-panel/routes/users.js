const usersRouter = require('express').Router();


const { findAllUsers,
    createUser,
    findUserById,
    updateUser,
    deleteUser,
    checkEmptyNameAndEmailAndPassword,
    checkEmptyNameAndEmail,
    filterPassword,
    checkIsUserExists,
    hashPassword
} = require('../middlewares/users');
const { sendAllUsers,
    sendUserCreated,
    sendUserById,
    sendUserUpdated,
    sendUserDeleted,
    sendMe
} = require('../controllers/users');


usersRouter.get('/', findAllUsers, filterPassword, sendAllUsers);

usersRouter.post(
  "/",
  findAllUsers,
  checkIsUserExists,
  checkEmptyNameAndEmailAndPassword,
  hashPassword,
  createUser,
  sendUserCreated
);
usersRouter.get('/:id', findUserById, filterPassword, sendUserById);

usersRouter.put(
  "/:id",
  checkEmptyNameAndEmail,
  updateUser,
  sendUserUpdated
);

usersRouter.delete(
  "/:id",
  deleteUser,
  sendUserDeleted
); 

usersRouter.get("/me", sendMe); 

module.exports = usersRouter;