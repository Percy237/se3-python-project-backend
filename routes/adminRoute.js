import express from "express";
const router = express.Router();
import { Admin } from "../models/adminModel.js";

router.post("/signup", async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // Check if username already exists
    const existingAdmin = await Admin.findOne({ email });
    if (existingAdmin) {
      return res.status(400).json({ message: "Email already exists" });
    }

    // Create a new admin without hashing the password
    const newAdmin = new Admin({
      name,
      email,
      password, // Note: This is the plain text password, not recommended for production
    });

    await newAdmin.save();
    res.status(201).json({ message: "Admin created successfully" });
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
});

router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    // Check if the admin exists
    const admin = await Admin.findOne({ email });
    if (!admin) {
      return res.status(404).json({ message: "Admin not found" });
    }

    // Compare the password in plain text (not recommended for production)
    if (password !== admin.password) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    res.status(200).json({ message: "Login successful" });
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
});

export default router;
