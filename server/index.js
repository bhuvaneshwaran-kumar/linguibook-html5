require("dotenv").config();
const express = require('express');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser')
const cors = require('cors')
const { CORS_ORIGIN } = require("./constants");
const app = express();
const { PORT, DB_URL } = process.env;
const authRoutes = require("./routes/auth")
const ctxtVocRoutes = require("./routes/ctxtVoc")

const startApp = async () => {
  try {
    const dbStatus = await mongoose.connect(DB_URL);
    if (dbStatus) { 
      const collections = await mongoose.connection.db.listCollections().toArray();
      let CORS_ORIGINS = CORS_ORIGIN.split(' ');
      app.use(cors({ origin: CORS_ORIGINS, credentials: true }));

      app.use(cookieParser());
      app.use(express.json());
      app.use(express.urlencoded({ extended: true }));

      app.use("/api/auth", authRoutes);
      app.use("/api/project", ctxtVocRoutes);

      app.listen(PORT, () => console.log(`Server is listening at http://localhost:${PORT}`));
    } else {
      throw new Error(`Unable to connect to db ${DB_URL}`);
    }
  } catch (Err) {
    console.log(Err);
  }
}

startApp();

