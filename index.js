const express = require('express')
const app = express()
const port = 3000
const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://phk9436:9633hkhk@cluster0.lqnrx.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')
    .then(()=> console.log('MongoDB Connected'))
    .catch(err => console.log(err));

app.get('/', (req, res) => {
  res.send('Hello World! test')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})