const express = require("express")
const mysql = require("mysql")
const app = express()
require("dotenv").config()

app.use(express.json())

const db = mysql.createConnection({
    user: "root",
    host: "localhost",
    password: process.env.password,
    database: "employeeSystem"
})

app.post("/create", (req, res) => {
    const name = req.body.name
    const age = req.body.age
    const country = req.body.country
    const position = req.body.position
    const wage = req.body.wage

    db.query("INSERT INTO employees (name, age, country, position, wage) VALUES(?,?,?,?,?)", [name, age, country, position, wage ], (err, result) => {
        if(err) {
            console.log(err);
        } else{
            res.send("VALUES INSERTED")
        }
    }
    )
})
// db.connect()
// console.log("Connected successfully!")

app.listen(3001, () => console.log("Server is running on port 3001"))