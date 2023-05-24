const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const en = require("dotenv");
const route = require("./routes/routes.js");

const app = express();

app.use(cors());

en.config();

app.use(bodyParser.json({ limit: "50mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));

app.use(express.json());

const port = 5001;

app.get("/", (req, res) => {
  res.send("server is set!!");
});

const DB = process.env.DATABASE;

// mongoose
//   .connect(DB)
//   .then(() => console.log("database connected"))
//   .catch((err) => {
//     console.log(err);
//   });

// try {
//   mongoose.connect(
//     DB,
//     { useNewUrlParser: true, useUnifiedTopology: true },
//     () => console.log("db connected")
//   );
// } catch (error) {
//   console.log("could not connect");
// }
const uri = "mongodb+srv://mashshetty:mashshetty@cluster0.im8qmes.mongodb.net/";


mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB Atlas');
  })
  .catch(err => {
    console.error('Error connecting to MongoDB Atlas:', err);
  });

app.use("/", route);

app.listen(port, () => {
  console.log("server is on!!");
});
