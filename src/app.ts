import express from "express";

import bodyParser from "body-parser";

import cors from "cors";

import newsPapersRoutes from "./routes/newspapers.route";

import publishersRoutes from './routes/publishers.route';

import homeRoutes from "./routes/home.route";

import fileUpload from "express-fileupload";

const app = express();

app.use(bodyParser.json());

app.use(cors());

app.use(
  fileUpload({
    limits: {
      fileSize: 5 * 1024 * 1024,
    },
  })
);

app.use("/api", homeRoutes);

app.use("/api/publishers", publishersRoutes);

app.use("/api/newspapers", newsPapersRoutes);

app.listen(4000);
