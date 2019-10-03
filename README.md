# Build a Banking Portal with Node & Express

In this project you’ll build a simple Banking Portal with Node & Express. There will be seven different routes that will include index, profile, savings, checking, credit, transfer and payment. We'll provide you with some starter code that includes several view templates. You'll use Node's built-in `fs` library to read and write data. We will also use the Express router to make the application more modular.

# MongoDB:
mongodb+srv://wangzeb:<password>@cluster0-un6g7.mongodb.net/admin?retryWrites=true&w=majority


const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://wangzeb:<password>@cluster0-un6g7.mongodb.net/admin?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});
