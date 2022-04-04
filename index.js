const express = require('express')
const app = express()
const port = 3000
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const {User} = require('./models/User');
const {mongoURI} = require("./config/key");

app.use(bodyParser.urlencoded({extended:true})); //application/x-www-form-urlencoded
app.use(bodyParser.json()); //application/json
mongoose.connect(mongoURI)
    .then(()=> console.log('MongoDB Connected'))
    .catch(err => console.log(err));

app.get('/', (req, res) => {
  res.send('Hello World! test')
})

app.post('/register', (req, res) => {
  //회원가입 할 때 필요한 정보들을 client에서 가져오면 그것들을 데이터 베이스에 넣어준다.
  const user = new User(req.body); //body-parser로 인해 들어감
  user.save((err, userInfo) => {
    return err? res.json({success:false, err}) : res.status(200).json({success:true});
  });
});

app.post('/login', (req, res) => {
  
  User.findOne({email: req.body.email}, (err, user) => { //요청된 이메일을 데이터베이스에서 있는지 찾는다.
    if(!user){
      return res.json({
        loginSuccess: false,
        message: "제공된 이메일에 해당하는 유저가 없습니다"
      });
    } else {
      user.comparePassword(req.body.password, (err, isMatch) => { //요청된 이메일이 데이터 베이스에 있다면 비밀번호가 맞는 비밀번호인지 확인.
       console.log(req.body.password, err, isMatch);
        if(!isMatch){
          return res.json({
            loginSuccess:false,
            message: "비밀번호가 틀렸습니다"
          });
        } else {
          /*user.generateToken((err, user) => { //비밀번호까지 맞다면 토큰을 생성하기
            
          });*/
          return res.json({
            loginSuccess:true
          });
        }
      });
    }
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})