const mongoose =  require('mongoose')
const config = require('../config')
const Grid = require('gridfs-stream');

mongoose.Promise = Promise
mongoose.connect(config.mongodb).then(() => {
  mongoose.grid = Grid(mongoose.connection.db, mongoose.mongo);
})

const db = mongoose.connection;

db.on('error', err => {
  console.error(`mongodb operation failed: ${err.message}`);
});