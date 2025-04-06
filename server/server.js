import express, { json } from "express";
import { connect } from "mongoose";
import { config } from "dotenv";
import cors from "cors"; // Add this line

config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(json());

// MongoDB connection
connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Could not connect to MongoDB", err));

// Routes
app.use("/api/signup", require("./routes/signup"));
app.use("/api/login", require("./routes/login"));
app.use("/api/admin", require("./routes/admin"));
app.use("/api/doctor", require("./routes/doctor"));
app.use("/api/patient", require("./routes/patient"));

// Root route
app.get("/", (req, res) => {
  res.send("Welcome to the Hospital Management System API");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
