const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const methodOverride = require("method-override");
const jobRoutes = require("./routes/jobs");

const app = express();

if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const dbURL = process.env.DB_URL || "mongodb://localhost:27017/jobTracker";
// Connect to MongoDB
mongoose
  .connect(dbURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

// Middleware
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.use(express.static("public"));

// Routes
app.use("/jobs", jobRoutes);

app.get("/", (req, res) => {
  res.redirect("/jobs");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("Server is running on port");
});
