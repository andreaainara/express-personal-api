var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var FavoriteBookSchema = new Schema ({
  title: String,
  author: String
});

var FavoriteBooks = mongoose.model('FavoriteBooks', FavoriteBookSchema);
module.exports = FavoriteBooks;
