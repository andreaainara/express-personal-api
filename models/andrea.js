var mongoose = require('mongoose'),
Schema = mongoose.Schema;

var AndreaSchema = new Schema({
  name: String,
  github_link: String,
  current_city: String,
  family_members: {
    type: Schema.Types.ObjectId,
    ref: 'FamilyMember'
  },
  pets: {name: String, breed: String, age: String, color: String},
  favorite_colors: String,
  favorite_books: {
    type: Schema.Types.ObjectId,
    ref: 'FavoriteBooks'
  }
});

var Andrea = mongoose.model('Andrea', AndreaSchema);
module.exports = Andrea;
