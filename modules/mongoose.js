const mongoose = require('mongoose')
const { MONGO_URL } = require('../config')

module.exports = mongoose.connect(MONGO_URL,  { useNewUrlParser: true, useUnifiedTopology: true })
.then(()=>console.log('Mongodb connected successfully!'))
.catch(err => console.log('Error to connect mongodb...'))