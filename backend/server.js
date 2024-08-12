const express = require("express");
const phrases = require("./src/phrases");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static("public"));

app.get("/api/phrase", (req, res) => {
  const randomIndex = Math.floor(Math.random() * phrases.length);
  res.json({ phrase: phrases[randomIndex] });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
