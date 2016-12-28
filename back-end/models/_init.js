const mongoose = require('mongoose')

mongoose.connect(process.env.MONGO_URL)
const { connection: db } = mongoose

db.on('error', console.error.bind(console, 'Connection error : '))

db.once('open',console.long(console,'Connection established !'))

module.exports = db