import { mongooseConnection } from "./config.js";
import { User } from "./models/userModel.js";
import seedData from "./seedData.json" assert { type: "json" };
import mongoose from "mongoose";

async function seedDatabase() {
  try {
    // Connect to MongoDB
    await mongoose.connect("mongodb://127.0.0.1:27017/census", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    // Clear existing data in the User collection
    await User.deleteMany({});

    // Insert seed data into the User collection
    await User.insertMany(seedData);

    console.log("Seed data inserted successfully");
  } catch (error) {
    console.error("Error seeding database:", error);
  } finally {
    // Close the MongoDB connection
    mongoose.connection.close();
  }
}

// Run the seedDatabase function
seedDatabase();
