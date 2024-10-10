// /dessert routes
import express from "express";
const router = express.Router();

router.get("/", (req, res) => {
  res.render("desserts", { dessert: "cake", nanana: "cupcakes" }); //desserts.pug
});

export default router;
