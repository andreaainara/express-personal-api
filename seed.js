// This file allows us to seed our application with data
// simply run: `node seed.js` from the root of this project folder.

var db = require('./models');

var andrea_profile = [{
  name: "Andrea Ceballos",
  github_link: "https://github.com/andreaainara",
  current_city: "San Leandro, CA",
  family_members: family_members_list,
  pets: {name: "Tosca", breed: "Maltese", age: 11, color: "White"},
  favorite_colors: "Teal, Purple, Green, Red",
  favorite_movies: ["The Sandlot", "The Princess Bride", "Public Enemies", "Deadpool"]
}];

var family_members_list = [
  {
    name: "Elsa Ceballos",
    relationship: "Mother",
    age: 53,
    current_city: "San Leandro, CA"
  },
  {
    name: "Juan Ceballos",
    relationship: "Father",
    age: 63,
    current_city: "San Lorenzo, CA"
  },
  {
    name: "Chalio Ceballos",
    relationship: "Brother",
    age: 38,
    current_city: "Boston, MA"
  },
  {
    name: "Paloma Ceballos",
    relationship: "Sister",
    age: 35,
    current_city: "San Diego, CA"
  },
  {
    name: "Amanda Ceballos",
    relationship: "Sister",
    age: 18,
    current_city: "Santa Cruz, CA"
  },
  {
    name: "Dominique Ceballos",
    relationship: "Sister",
    age: 8,
    current_city: "San Lorenzo, CA"
  },
  {
    name: "Mateo Ceballos",
    relationship: "ßBrother",
    age: 7,
    current_city: "San Lorenzo, CA"
  }
];



// var new_campsite = {description: "Sharp rocks. Middle of nowhere."}

// db.Campsite.create(new_campsite, function(err, campsite){
//   if (err){
//     return console.log("Error:", err);
//   }

//   console.log("Created new campsite", campsite._id)
//   process.exit(); // we're all done! Exit the program.
// })
