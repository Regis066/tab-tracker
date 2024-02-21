import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import morgan from "morgan";
import { config } from "dotenv";
import routes from "./routes/index.js";
import { Sequelize } from "sequelize";

const app = express();
config();
app.use(morgan("combined"));
app.use(bodyParser.json());
app.use(cors());
routes(app);


export const sequelize = new Sequelize(
  process.env.DATABASE,
  process.env.USER,
  process.env.PASSWORD,
  {
    host: "localhost",
    dialect: "sqlite",
    storage: "./tabtracker.sqlite",
  }
);

try {
    await sequelize.authenticate();
    app.listen(process.env.PORT || 8082, () =>
      console.log(`Server listening on port ${process.env.PORT} `)
    );
    
} catch (error) {
  console.error("Unable to connect to the database:", error);
}





