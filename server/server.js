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


// app.post('/login', async (req, res) => {
//   const { tokenId } = req.body;


//   const ticket = await jwt.verify(tokenId, process.env.JWT_SECRET);

//   const { sub: googleId, email, name, picture: imageUrl } = ticket;


//   let user = await User.findOne({ googleId });

//   if (!user) {

//     user = new User({ googleId, email, name, imageUrl });
//     await user.save();
//   }

//   res.send(user);
// });

// start the Express server
app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
