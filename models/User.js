const mongoose = require('mongoose');
const {Schema} = mongoose;
const bcrypt = require('bcrypt');
const saltRounds = 10; //salt의 글자수
const jwt = require('jsonwebtoken');

const userSchema = Schema({
    name : {
        type: String,
        maxlength: 50
    },
    email: {
        type: String,
        trim: true
        //unique: 1
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

userSchema.pre('save', function(next){
    var user = this;
    //비밀번호를 암호화 시킨다
    this.isModified('password')?
        bcrypt.genSalt(saltRounds, function(err, salt) {
            if(err) return next(err);
            bcrypt.hash(user.password, salt, function(err, hash) {
                // Store hash in your password DB.
                if(err) return next(err);
                user.password = hash;
                next();
            });
        })
    : next();
});

userSchema.methods.comparePassword = function(plainPassword, callback){
    bcrypt.compare(plainPassword, this.password, function(err, isMatch){
        return err? callback(err, false) : callback(false, isMatch);
    });
}

userSchema.methods.generateToken = function(callback) {
    //jsonwebtoken을 이용해서 token을 생성하기
    var user = this;
    var token = jwt.sign(user._id.toJSON(), 'secretToken');
    user.token = token; //user._id + 'secretToken' = token
    user.save(function(err, user){
        return err ? callback(err, false) : callback(false, user);
    })
}

const User = mongoose.model('User', userSchema);

module.exports = {User}; //모델을 다른곳에 쓸수있도록 export