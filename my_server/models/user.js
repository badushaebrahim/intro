//create mongoose schema
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const userSchema = new Schema({
	name: String,
	pwd: {type:String},
	idno: String});
//create mongoose model
const User = mongoose.model('Users', userSchema);
//export mongoose model
module.exports = User;
