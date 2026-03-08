const express = require("express");
const fetch = require("node-fetch");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Serve HTML form
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

// Handle form submission
app.post("/submit", async (req, res) => {
  try {
    const response = await fetch("http://backend:5000/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(req.body)
    });
    const data = await response.json();
    res.send(`<h3>Backend Response: ${JSON.stringify(data)}</h3>`);
  } catch (err) {
    res.status(500).send("Error: " + err.message);
  }
}); // <-- make sure this closes app.post

// Start server
app.listen(3000, "0.0.0.0", () => {
  console.log("Frontend running on port 3000");
}); // <-- make sure this is here