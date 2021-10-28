const mongoose = require('mongoose')
const { MONGO_URL } = require('../config')

module.exports = mongoose.connect('mongodb+srv://fazliddin:fazliddin2001@mydata.6hfko.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
  { useNewUrlParser: true, useUnifiedTopology: true })
.then(()=>console.log('Mongodb connected successfully!'))
.catch(err => console.log('Error to connect mongodb...'))