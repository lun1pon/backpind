const makeRatingFile = require("./rating-file");
const config = require("./config");
const { updateRating, createRating } = require("./calculations");
module.exports = {
    makeRatingFile,
    config,
    updateRating,
    createRating,
}