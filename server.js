const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// routes
app.use("/api/auth", require("./routes/auth"));
app.use("/api/diary", require("./routes/diary"));
app.use("/api/stats", require("./routes/stats"));

const PORT = 5000;
app.listen(PORT, () => {
  console.log("Backend running on http://localhost:" + PORT);
});
