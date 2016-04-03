var mongoose = require('mongoose'),
Schema = mongoose.Schema;

var AndreaSchema = new Schema({
  name: String,
  github_link: String,
  current_city: String,
  family_members: [
    {name: String, relationship: String, age: number, current_city: String},
    {name: String, relationship: String, age: number, current_city: String},
    {name: String, relationship: String, age: number, current_city: String},
    {name: String, relationship: String, age: number, current_city: String},
    {name: String, relationship: String, age: number, current_city: String},
    {name: String, relationship: String, age: number, current_city: String},
    {name: String, relationship: String, age: number, current_city: String}
  ],
  pets: {name: String, breed: String, age: String, color: String},
  favorite_colors: String
});

var Andrea = mongoose.model('Andrea', AndreaSchema);
module.exports = Andrea;
