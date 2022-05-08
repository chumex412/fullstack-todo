const mongoose = require('mongoose');
require('dotenv/config');

module.exports = async () => {
  try {
    await mongoose.connect(
      process.env.DB_CONNECTION,
      {useNewUrlParser: true}
    )
    console.log('Connected to DB!')
  } catch(err) {
    console.log('Could not connect to database.', err)
  }
}