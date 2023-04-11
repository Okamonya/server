const express = require('express')
const app = express();
const cors = require("cors");


// const corsOptions ={
//     origin:'http://localhost:3001', 
//     credentials:true,            //access-control-allow-credentials:true
//     methods: ["GET", "POST", "PUT", "DELETE"],
//     optionSuccessStatus:200
// }

// app.use(cors())
// app.use(express.json())

// const register = require("./routes/register")
// app.use("/add", register)

// const login = require("./routes/login")
// app.use("/auth", login)

// const logged = require("./routes/logged")
// app.use("/logged", logged)

// const newEntry = require("./routes/newEmployee")
// app.use("/newentry", newEntry)

// const allEmployees = require("./routes/allEmployees")
// app.use("/all-employees", allEmployees)

// const addImage = require("./routes/addImage")
// app.use("/add-image", addImage)

// const getImages = require("./routes/getImages")
// app.use("/get-image", getImages)

// const update = require("./routes/update")
// app.use("/update", update)

// const expense = require("./routes/expense")
// app.use("/expense", expense)

// const allexpense = require("./routes/allexpenses")
// app.use("/allexpenses", allexpense)

// const search = require('./routes/search')
// app.use('/search/:key', search)

// const comexpenses = require('./routes/addCoExpense')
// app.use('/add-expenses', comexpenses)

// const getcomexpenses = require('./routes/getCoExpenses')
// app.use('/get-expenses', getcomexpenses)

// const deletecomexpenses = require('./routes/getCoExpenses')
// app.use('/delete-expense/:idcomexpenses', deletecomexpenses)

// app.listen(8001, () => {
//     console.log('running on port 8001')
// })
const http = require('http');
const url = require('url');
const mysql = require('mysql');

// Create MySQL database connection
const connection = require('./config/db')

// Connect to MySQL database
connection.connect((err) => {
    if (err) throw err;
    console.log('Connected to MySQL database!');
});

const server = http.createServer((req, res) => {

    const { method, url } = req;
    const [_, resource, id] = url.split('/')
    // Parse URL

    // Handle CRUD routes
    switch (reqUrl.pathname) {
        // Create record
        case 'PUT':
            const { name, age } = reqUrl.query;
            connection.query('INSERT INTO users (name, age) VALUES (?, ?)', [name, age], (err, result) => {
                if (err) throw err;
                res.end(`User ${name} created with ID ${result.insertId}`);
            });
            break;

        // Read record
         case 'GET':
            if (resource === 'all-employees') {
                const query = 'SELECT * FROM employees';
                connection.query(query, (error, result) => {
                    if (error) {
                        res.statusCode = 500;
                        res.end(JSON.stringify({ error }));
                    } else {
                        res.statusCode = 200;
                        res.writeHead(200, { 'Content-Type': 'application/json' });
                        res.end(JSON.stringify(result))
                    }
                });
            } else {
                res.statusCode = 404;
                res.end(JSON.stringify({ message: 'Resource not found' }));
            }
            break;

        // Update record
        case '/update':
            const { id, newName, newAge } = reqUrl.query;
            connection.query('UPDATE users SET name = ?, age = ? WHERE id = ?', [newName, newAge, id], (err, result) => {
                if (err) throw err;
                res.end(`User with ID ${id} updated`);
            });
            break;

        // Delete record
        case '/delete':
            const deleteId = reqUrl.query.id;
            connection.query('DELETE FROM users WHERE id = ?', [deleteId], (err, result) => {
                if (err) throw err;
                res.end(`User with ID ${deleteId} deleted`);
            });
            break;

        // Default route
        default:
            res.statusCode = 404;
            res.end('404 Not Found');
    }
}