const express = require('express');
const mongoose = require('mongoose');
const postApi = require('./controller')
const PORT = 4000;

const app = express();
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/postdb', { useNewUrlParser: true });

app.use('/api', postApi)

app.get('/', (req, res) => {
  res.json({
    'hello': 'world'
  })
})

app.listen(PORT, () => {
  console.log('App at http://localhost:4000')
})
