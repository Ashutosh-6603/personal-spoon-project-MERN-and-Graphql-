import express from "express";

const app = express();

const PORT = 5000;

// Middleware
app.use(express.json);

// Server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
