const express = require("express");
const app = express();
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
const cors = require("cors");
// const mongoose = require("mongoose");
require("dotenv").config();

const bodyParser = require("body-parser");

// Connect to DB using mongodb
const client = new MongoClient(process.env.DB_CONNECTION, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function connectDB() {
  try {
    //Start timer
    const start = Date.now();

    // Set dbClient and ObjectId in app locals
    app.locals.dbClient = client;
    app.locals.ObjectId = ObjectId;

    await client.connect();

    //End timer
    const end = Date.now();
    //Calculate duration in ms
    const duration = end - start;

    console.log("Successfully connected to MongoDB!");
    console.log(`${duration}ms`);
  } catch (error) {
    console.error("MongoDB connection error:", error);
  }
}

connectDB();

// Connect to DB using mongoose
// mongoose
//   .connect(process.env.DB_CONNECTION, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   })
//   .then(() => console.log("Successfully connected to MongoDB with Mongoose"))
//   .catch((error) => console.error("MongoDB connection error:", error));

//Middleware
app.use(cors());
app.use(bodyParser.json());

//Import Routes
const homeRouter = require("./routes/home");
const postsRouter = require("./routes/posts");

app.use("/", homeRouter);
app.use("/post", postsRouter);

//Listen to the server
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
