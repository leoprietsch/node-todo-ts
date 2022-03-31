import express from "express";
import morgan from "morgan";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors);
app.use(morgan("dev"));

app.get("/", (req, res) => {
  res.status(200).send("Hello world!");
});

app.listen(process.env.PORT, () => {
  console.log(
    `${process.env.PROJECT_NAME} running at http://localhost:${process.env.PORT}`
  );
});
