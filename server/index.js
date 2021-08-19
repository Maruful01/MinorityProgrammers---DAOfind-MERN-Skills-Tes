const express = require ('express');
const bodyParser = require('body-parser')
const cors = require ('cors');
const MongoClient = require('mongodb').MongoClient;
const fileUpload = require('express-fileupload');
require('dotenv').config()

const app = express ();
app.use(bodyParser.json());
app.use (cors());
app.use (express.static('products'));
app.use (fileUpload());


const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.8dpf0.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
const port = 5000;
client.connect(err => {
  const daoCollection = client.db("daoFind").collection("daos");
  // perform actions on the collection object

  console.log ("database connected")


  app.get('/', function (req, res) {
    res.send('hello world')
  })

  app.get ('/dao', (req, res) => {
    daoCollection.find ({})
    .toArray ((err, documents) => {
      res.send (documents);
    })
  })

});

app.listen (process.env.PORT || port)

