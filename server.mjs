//.env
//VARIABLENAME=value
import express from "express";
import dotenv from "dotenv";
dotenv.config();
const PORT = process.env.PORT || 4000;
const app = express();
import pug from "pug";

import dessertRoutes from "./routes/desserts.mjs";
import maincourseRoutes from "./routes/maincourse.mjs";

app.set("view engine", "pug");
app.get("/", (req, res) => {
  res.render("home"); //filename home.pug
});

//routes
app.use("/desserts", dessertRoutes);
app.use("/maincourse", maincourseRoutes);

//CANNOT Get /
app.listen(PORT, () => console.log(`Server is listening on port: ${PORT}`));
