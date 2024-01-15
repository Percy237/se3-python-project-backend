export const PORT = 5555;

import mongoose from "mongoose";
const mongoAtlasUri = `mongodb://127.0.0.1:27017/se3`;
export function mongooseConnection() {
  try {
    mongoose.connect(mongoAtlasUri);
  } catch (e) {
    console.log("could not connect");
  }
  const dbConnection = mongoose.connection;
  dbConnection.on("error", (err) => console.log(`Connection error ${err}`));
  dbConnection.once("open", () => console.log("Connected to DB!"));
}
// module.exports = mongooseConnection;
