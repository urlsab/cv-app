const express = require('express');
const fs = require('fs');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true}));
app.use(cors());


// 1. enter 4000 directly give us this route
app.get('/', (req, res) => {
  res.send('home page');
});

// fs.readFile('./db.json',  (err,  data) => {
//   if (err) throw err;
//   let db = JSON.parse(data); // here is your data
//   db.push({
//       userId: 2,
//   })

//   fs.writeFile('./db.json', JSON.stringify(db) , (err) => {}) // here you update the file itself
// });

// for get as a file
// app.get("/", (req, res) => {
//   res.sendFile(path.join(__dirname, "src/Components/FullProfile", "HooksTry.js"));
// });

// 2. user post the input to the server
app.post('/postInput', function (req, res) {
  res.send(req.body); //  show on 4000

  console.log(req.body); // show on the terminal

  fs.readFile('./db.json',  (err,  data) => {
    if (err) throw err;
    let db = JSON.parse(data); // here is your data
    db.push(req.body)

    fs.writeFile('./db.json', JSON.stringify(db) , (err) => {}) // here you update the file itself
  });


})

app.get('/allResume', (req, res) => {
  res.send(req.body); // empty object - why?
  console.log(req.body);
});

// 3. the server save the input and style it - by .push maybe

// 4. user asking his input as styles resume from the server
app.get('/styledResume', (req, res) => {
  res.send(req.body);
});

app.listen(4000, () => console.log('listening on port 4000'));