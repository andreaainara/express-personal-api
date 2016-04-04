// This file allows us to seed our application with data
// simply run: `node seed.js` from the root of this project folder.

var db = require('./models');

var new_profile = [{
  name: "Andrea Ceballos",
  github_link: "https://github.com/andreaainara",
  current_city: "San Leandro, CA",
  family_members: family_members_list,
  pets: {name: "Tosca", breed: "Maltese", age: 11, color: "White"},
  favorite_colors: "Teal, Purple, Green, Red"
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
    relationship: "Brother",
    age: 7,
    current_city: "San Lorenzo, CA"
  }
];

var favorite_books = [
  {
    title: "Mexican Whiteboy",
    author: "Matt de la Peña"
  },
  {
    title: "The Girl with the Dragon Tattoo (and following sequels)",
    author: "Stieg Larsson"
  },
  {
    title: "The Shape of the Water (and other Inspector Montalbano novels)",
    author: "Andrea Camilleri"
  },
  {
    title: "The Shining Girls",
    author: "Lauren Beukes"
  },
  {
    title: "The Devotion of Suspect X",
    author: "Keigo Higashino"
  }
];


db.Andrea.create(new_profile, function(err, profile){
  if (err) {
    return console.log ("error: " + err);
  }
  console.log("New profile created, id: " + profile_id);
});

// var new_campsite = {description: "Sharp rocks. Middle of nowhere."}

// db.Campsite.create(new_campsite, function(err, campsite){
//   if (err){
//     return console.log("Error:", err);
//   }

//   console.log("Created new campsite", campsite._id)
//   process.exit(); // we're all done! Exit the program.
// })
