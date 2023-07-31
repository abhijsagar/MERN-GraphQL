const mongoose = require('mongoose');

const connectDB = async () => {
  const conn = await mongoose.connect('mongodb+srv://admin:admin@cluster0.tl5opti.mongodb.net/?retryWrites=true&w=majority');

  console.log(`MongoDB Connected`);
};

module.exports = connectDB;
