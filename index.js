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

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})