const express = require('express');
const app = express();
const port = 8000;

app.get('/', 		(req,res) => res.sendFile(__dirname + '/index.html'))

app.get('/test', 	(req,res) => res.send('Hit route /test'))

app
  .route('/login')
  .get((req,res) => res.sendFile(__dirname + '/login.html'))

const bodyParser = require('body-parser');

 app.use(bodyParser.urlencoded({ extended: true }))

 app.post("/users", (req,res) => {
   console.log(req.body.user); // "Albert"
   res.status(200).end();
 })



// launch
app.listen(port, () => console.log(`example app listening on port ${port}!`) );
