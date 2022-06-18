const mongoose = require('mongoose');
require('dotenv').config();
mongoose.connect(
  `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PWD}@cluster0.h7wyn.mongodb.net/zibrachat?retryWrites=true&w=majority`,
  () => {
    console.log('connected to mongo db');
  }
);
