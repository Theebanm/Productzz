import express from "express";
import dotenv from "dotenv";
import path from "path";
import { connectDB } from "./config/db.js";
import productRoute from "./routes/products.routes.js";
dotenv.config();

const app = express();
app.use(express.json()); // allows us to accept json data from body
const PORT = process.env.PORT || 7750;

const __dirname = path.resolve();

app.use("/api/products", productRoute);

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "/client/dist")));
  app.use("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "dist", "index.html"));
  });
}

// listen

app.listen(PORT, () => {
  connectDB();
  console.log(`Server is Running on ${PORT}`);
});
