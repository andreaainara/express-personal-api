var mongoose = require("mongoose");
mongoose.connect( process.env.MONGOLAB_URI ||
                  process.env.MONGOHQ_URL ||
                  "mongodb://localhost/personal-api");

module.exports.Andrea = require("./andrea.js");
module.exports.FamilyMember = require("./family.js");
module.exports.FavoriteBooks = require("./books.js");
