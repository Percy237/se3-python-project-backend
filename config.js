export const PORT = 5555;

import mongoose from "mongoose";
const mongoAtlasUri = `mongodb+srv://percy:tsembompercy18@cluster0.9efxa2h.mongodb.net/se3`;
export function mongooseConnection() {
  try {
    mongoose.connect(mongoAtlasUri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  } catch (e) {
    console.log("could not connect");
  }
  const dbConnection = mongoose.connection;
  dbConnection.on("error", (err) => console.log(`Connection error ${err}`));
  dbConnection.once("open", () => console.log("Connected to DB!"));
}
// module.exports = mongooseConnection;
