const express = require("express")
const bodyParser = require('body-parser')

const {middleware} = require("./middleware/middleware")

const app = express()
const port = 3000

// Use body-parser => req.body
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const data = {
    students: [
        {
            id: 1,
            name: "Alice"
        },
        {
            id: 2,
            name: "Bob"
        }
    ]
}


app.get("/", (req, res) => {
    res.send("Hello")
})

app.get("/student", (req, res) => {
    res.json(data)
})

app.get("/student/:id", (req, res) => {
    if (req.params.id <= data["students"].length) {
        student = data["students"][req.params.id - 1]
        res.json(student)
    }
    else {
        res.redirect("/")
    }
})

app.get("/:path", middleware)

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})