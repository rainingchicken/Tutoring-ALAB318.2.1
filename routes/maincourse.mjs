//main chef
import express from "express";
const router = express.Router();

router.get("/", (req, res) => {
  res.json({ meal: "burgers" });
});

export default router;
