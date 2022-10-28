const mongoose = require('mongoose');

// MongoDB Connection Class
class MongoDB {
  constructor() {
    mongoose
      .connect('mongodb://admin:password@localhost:27017/test-db?authSource=admin', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
      .then(() => {
        console.log('Connected to MongoDB');
      })
      .catch((err) => {
        console.error('MongoDB Error: ', err.message);
      });
  }
}

module.exports = new MongoDB();
