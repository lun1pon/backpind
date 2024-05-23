const gamesRouter = require('express').Router();

const {
    findAllGames,
    createGame,
    findGameById,
    updateGame,
    deleteGame,
    checkEmptyFields,
    checkIsGameExists,
    checkIfUsersAreSafe,
    checkIfCategoriesAvaliable,
    checkIsVoteRequest,
  } = require('../middlewares/games');
  
const {
    sendGameCreated,
    sendGameById,
    sendGameUpdated,
    sendGameDeleted
  } = require('../controllers/games');

gamesRouter.get("/games/:id", findGameById, sendGameById);

gamesRouter.post(
    "/games",
    findAllGames,
    checkIsGameExists,
    checkIfCategoriesAvaliable,
    checkEmptyFields,
    createGame,
    sendGameCreated
  );
  
  gamesRouter.put(
    "/games/:id",
    findGameById,
    checkIsVoteRequest,
    checkIfUsersAreSafe,
    checkIfCategoriesAvaliable,
    checkEmptyFields,
    updateGame,
    sendGameUpdated
  );

gamesRouter.delete(
    "/games/:id",
    deleteGame,
    sendGameDeleted
  );

module.exports = gamesRouter;