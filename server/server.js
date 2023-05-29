import dotenv from "dotenv/config";
import express from "express";
import cors from "cors";
import records from "./routes/record.js";
import mongoose from "mongoose";
import jwt from "jsonwebtoken";
import User from "./models/User.js"; 

const PORT = process.env.PORT || 5050;
const app = express();

app.use(cors());
app.use(express.json());

app.use("/record", records);

// Connect to MongoDB
const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true });
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})

// Login route
app.post('/login', async (req, res) => {
  const { tokenId } = req.body;

  // verify token ID
  const ticket = await jwt.verify(tokenId, process.env.JWT_SECRET);

  const { sub: googleId, email, name, picture: imageUrl } = ticket;

  // look for existing user
  let user = await User.findOne({ googleId });

  if (!user) {
    // create new user
    user = new User({ googleId, email, name, imageUrl });
    await user.save();
  }

  // create user session...

  res.send(user);
});

// start the Express server
app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
