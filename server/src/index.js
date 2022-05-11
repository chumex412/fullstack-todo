const express = require("express");
const path = require('path');
const bodyParser = require("body-parser");
const cookieSession = require("cookie-session");
const connection = require("./db");
const users = require('./routes/User');
const cors = require("cors");

const app = express();

connection();

app.use(express.static(path.join(__dirname, '/build')))

app.use(bodyParser.json());

app.use(cookieSession({
  keys: ["sdkjsdkjkjdf3kd9"]
}))

app.use(cors())

app.use('/api/users', users)

app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname + '/build/index.html'))
})

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server is running on  http://localhost:${port}`)
})