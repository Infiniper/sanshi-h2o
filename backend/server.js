const express = require("express");
const cors = require("cors");
const path = require("path");
const expressLayouts = require("express-ejs-layouts");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(expressLayouts);

// Import routes
const apiRoutes = require("./routes/api");
const adminRoutes = require("./routes/admin");

app.use("/api", apiRoutes);
app.use("/admin", adminRoutes);

// Health check
app.get("/", (req, res) => res.send("Sanshi H2O Backend is running 🚀"));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
