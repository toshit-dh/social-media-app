const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const authRoutes = require('./routes/auth-routes')
const app = express()
const cookiesParser = require('cookie-parser')
app.listen(5000, () => {
  console.log("Listening to 5000");
});
app.use(
  cors({
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST"],
    credentials: true,
  })
);
mongoose
  .connect(
    "mongodb+srv://extratdh:UfklmqTnqLbbTzPE@cluster0.p4jixb8.mongodb.net/"
  )
  .then(() => console.log("DB Connected"))
  .catch((e) => console.log(e.message));
app.use(cookiesParser)
app.use(express.json());
app.use('/',authRoutes)
