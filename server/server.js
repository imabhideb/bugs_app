const express = require('express')
const mysql = require('mysql2')


const app = express()
app.use(express.json())

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Dilip@adt354",
    database: "bug_schema"
})

// Connect to the database
db.connect((err) => {
    if (err) {
      console.error('Error connecting to the database:', err);
      return;
    }
    console.log('Connected to the database!');
    
    // You can now perform database operations here
});


app.get("/bugs", (req, res) => {
    const sql = "SELECT * FROM STD";
    db.query(sql, (err, data) => {
        if (err) {
            console.error("Error executing query:", err);
            return res.status(500).json({ error: "An error occurred while fetching data" });
        }
        return res.json(data);
    });
});

app.post("/create", (req, res) => {
    const bug = req.body.bug
    const status = req.body.status  

    db.query("INSERT INTO bug_table (bug, status) VALUES (?, ?)", [bug, status], (err, res) => {
        if (err) {
            console.log(err)
        } else{
            res.send("Values Inserted")
        }
    })
})

app.listen(8081, () => {
    console.log("Listening on port 8081")
})