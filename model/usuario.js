const mongoose = require('mongoose');

const User = mongoose.model('User', {
    
   
    nome: String,
    email: String
    
});
module.exports = User;