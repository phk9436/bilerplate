const mongoose = require('mongoose');
const {Schema} = mongoose;

const userSchema = Schema({
    name : {
        type: String,
        maxlength: 50
    },
    email: {
        type: String,
        trim: true,
        unique: 1
    },
    password: {
        type: String,
        minlength:5
    },
    lastname: {
        type: String,
        maxlength: 50
    },
    role: {
        type: Number,
        default: 0
    },
    image: String,
    token: { //유효성검사
        type: String
    },
    tokenExp: { //토큰 유효기간
        type: Number
    }
});

const User = mongoose.model('User', userSchema);

module.exports = {User}; //모델을 다른곳에 쓸수있도록 export