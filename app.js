const express = require("express");
const env = require("dotenv").config();
const app = express();

const studentRoute = require("./routes/student_route");
console.log(studentRoute);
app.use(studentRoute);

app.get("/", (req,res) => {
    res.send("Hello world!");
});

const port = process.env.PORT;
app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}`);
});