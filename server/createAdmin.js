require("dotenv").config();

import { connect, connection } from "mongoose";
import Admin from "./models/Admin";

connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Could not connect to MongoDB", err));

async function createAdmin() {
  const admin = new Admin({
    firstName: "udit",
    lastName: "jain",
    email: "uditj66@gmail.com",
    password: "SAMjain@123",
    role: "admin",
  });

  try {
    await admin.save();
    console.log("Admin created successfully");
  } catch (error) {
    console.error("Error creating admin:", error);
  } finally {
    connection.close();
  }
}

createAdmin();
