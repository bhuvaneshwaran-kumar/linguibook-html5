require("dotenv").config();
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const { PORT, DB_URL } = process.env;

app.get('/', (_, res) => {
  res.send('Hello World!');
});

const startApp = async () => {
  try {
    const dbStatus = await mongoose.connect(DB_URL);
    if (dbStatus) { 
      app.listen(PORT, () => {
        console.log(`Server is listening at htt p://localhost:${PORT}`);
      });
    } else {
      throw new Error(`Unable to connect to db ${DB_URL}`);
    }
  } catch (Err) {
    console.log(Err);
  }
}

startApp();

