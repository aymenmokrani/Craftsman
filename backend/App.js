const express = require('express')
const app = express()
const port = 4000

const Client = require('./models/Client')
const Category = require('./models/Category')
const Crafsman = require('./models/Craftsman')
const Job = require('./models/Job')
const authRoutes = require('./routes/AuthRoutes')
const cookieParser = require('cookie-parser')

const mongoose = require('mongoose')
mongoose.Promise = global.Promise
const bodyParser = require('body-parser')


// MiddleWares
app.use(bodyParser.json())
app.use('/api', authRoutes)
app.use(cookieParser())





// Database connecion
mongoose.connect('mongodb://localhost/craftsmanDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: true
})
mongoose.connection.once('open', () => {
  console.log("Connection success");
}).on('error', err => console.log(err))





app.get('/', (req, res) => {})

 
app.listen(port, () => {console.log(`listening to ${port}`);})