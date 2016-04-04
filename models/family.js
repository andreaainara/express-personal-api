var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var FamilyMemberSchema = new Schema ({
  name: String,
  relationship: String,
  age: Number,
  current_city: String
});

var FamilyMember = mongoose.model('FamilyMember', FamilyMemberSchema);
module.exports = FamilyMember;
