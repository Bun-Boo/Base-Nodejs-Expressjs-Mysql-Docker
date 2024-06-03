import express from "express";
import ip from "ip";
import dotenv from "dotenv";
import cors from "cors";
import mysql from "mysql2";

dotenv.config();
const PORT = process.env.PORT || 3000;
const app = express();

app.use(cors({
    origin: "*"
}));
app.use(express.json());

const pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    port: process.env.DB_PORT, 
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    connectionLimit: 10

});

app.get("/", (req, res) => {
    res.send("Hello World");
});

app.get("/users", (req, res) => {
    pool.query('SELECT * FROM users', (err, results) => {
        if (err) {
            console.log(err);
            res.status(500).send("Internal Server Error");
        } else {
            res.json(results[0]);
        }
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://${ip.address()}:${PORT}`);
});