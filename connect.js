require("dotenv").config();
const mongoose = require("mongoose");

// Enforce strict query behavior in Mongoose
mongoose.set("strictQuery", true);

// Function to connect to MongoDB
async function connectToMongoDB(url) {
  console.log(`Connecting to MongoDB at: ${url}`);
  try {
    await mongoose.connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB connected!");
  } catch (error) {
    console.error("Connection error:", error.message);
    process.exit(1); // Exit the process with a failure code
  }
}

module.exports = { connectToMongoDB };

// const mongoose = require('mongoose');

// mongoose.set("strictQuery", true);

// async function connectToMongoDB(url) {
//     return mongoose.connect(url);
// }

// module.exports = { connectToMongoDB };
