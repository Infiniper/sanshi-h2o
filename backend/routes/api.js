const express = require("express");
const router = express.Router();

// Example API route
router.post("/contact", (req, res) => {
  console.log(req.body); // later insert into Supabase
  res.status(200).json({ message: "Contact received ✅" });
});

module.exports = router;
