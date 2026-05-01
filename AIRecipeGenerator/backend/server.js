import express from "express";
import cors from "cors";

const app = express();
const PORT = process.env.PORT || 8000;
// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.json({ message: "AI APP starting" });
});

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
