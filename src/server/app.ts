import express from "express";
import { db } from "../config/db.config";
import { router } from "../routes/task.routes";

const app = express();

//middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//routes
app.use("/api/v1/", router);

//db connection then server connection
db.then(() => {
  app.listen(7070, () => console.log("Server is listening on port 7070"));
});
