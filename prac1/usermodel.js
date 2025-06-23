const mongoose = require('mongoose');

mongoose.connect(`mongodb://localhost:27017/user`);     //connect with db server

const userSchema = mongoose.Schema({
    name: String,
    email: String,
    username: String,
    password: String
})                            //details required by user

mongoose.model('User', userSchema);     //to perform crud operation

module.exports = mongoose.model('User');   //to work with route model should be export