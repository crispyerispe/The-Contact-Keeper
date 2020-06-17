const mongoose = require("mongoose");
const config = require("cofig");
const db = config.get("mongo");

const connectDB = () => {
  mongoose
    .connect(db, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
    })
    .then(() => console.log("MongoDB Connected"));
};
