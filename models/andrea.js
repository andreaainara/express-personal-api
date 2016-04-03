var mongoose = require('mongoose'),
Schema = mongoose.Schema;

var AndreaSchema = new Schema({
  name: String,
  github_link: String,
  profile_image: String,
  current_city: String,
  family_members: [
    {name: String, relationship: String, age: number},
    {name: String, relationship: String, age: number},
    {name: String, relationship: String, age: number},
    {name: String, relationship: String, age: number},
    {name: String, relationship: String, age: number},
    {name: String, relationship: String, age: number},
    {name: String, relationship: String, age: number}
  ],
  pets: [
    {name: String, breed: String, age: String, color: String}
  ],
  favorite_colors: String
});

var Andrea = mongoose.model('Andrea', AndreaSchema);
module.exports = Andrea;
