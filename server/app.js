import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import morgan from "morgan";

const app = express();
app.use(morgan("combined"));
app.use(bodyParser.json());
app.use(cors());

app.post("/register", (req, res) => { 
    res.send({
        message: `User ${req.body.email} registered successfully !`
    });
});

app.listen(process.env.PORT || 8081, () => console.log("Server listening on port 8081"));