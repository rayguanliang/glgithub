const mongoClient = require('mongodb').MongoClient;
//const url = process.env.MONGODB_URL
const url = 'mongodb://20.2.177.157:27017/mydb';
//const url = 'mongodb://mynm-mongodb-0.mongodb-service:27017,mynm-mongodb-1.mongodb-service:27017,mynm-mongodb-2.mongodb-service:27017/mydb';
//let mongodb;
var express = require('express');
var app = express();
var port = 3000;
//let waitTime = 3000;
//var path = require('path');
//const cii = db.db('mydb').listCollections();
//const dbName = 'mydb' 
mongoClient.connect(url, {useUnifiedTopology: true}, function(err, db) {
      if(err) {
        console.log("attempting to reconnect to " + url + " but failed")
        setTimeout(connect.bind(this, callback), waitTime)
        return
      } else {
        /*
        var myobj = {name: 'ABC Company Inc.', gender: 'Dundas 100'};
        var myobj1 = {name: 'DEF Company Inc.', gender: 'Trafalgar 200'};
        
        db.db('mydb').createCollection('mydbc', function(err,res) {
          if (err) throw err;
          console.log('Collection successfully created');
        });
        db.db('mydb').collection('mydbc').insertOne(myobj, function(err,res){
          if (err) throw err;
          console.log('The first document inserted');
        });
        db.db('mydb').collection('mydbc').insertOne(myobj1, function(err,res){
          if (err) throw err;
          console.log('The second document inserted');
        });
        */
        const cursor = db.db('mydb').collection('mydbc').find();
        app.get('/', function(req,res) {
          cursor.toArray(function(err, result){
            if (err) throw err;
            res.render('index.ejs', {name: result});
          });
        });
        /*
        app.get('/', function(req,res){
          res.render('index.ejs', {name: url});
        });
        */
        console.log('Connection successfully created!');
      }
      
});
/*
app.get('/', function(req,res){
    
      res.render('index.ejs', {name: url});
    
});
*/
/*
function connect(callback){
    mongoClient.connect(url, {useUnifiedTopology: true}, function(err, db) {
      if(err) {
        console.log("attempting to reconnect to " + url)
        setTimeout(connect.bind(this, callback), waitTime)
        return
      } else { 
        mongodb = db;
        callback();
        console.log('Connection successfully created!');
      }
    });
}

function connect(){
    mongoClient.connect(url, {useUnifiedTopology: true}, function(err, db){
      if(err){
       console.log('Attempting connect to ' + url + ' is failed!');
       throw err;
      } else {
      mongodb = db;
      console.log('Connection successfully created!');
      }
    });
}

function get(){
    return mongodb;
}
function close(){
    mongodb.close();
}

module.exports = {
    connect,
    get
};
*/
/*
    db.db('mydb').listCollections().toArray(function(err,ci){
      if(err) throw err;
      const cursor = db.db('mydb').collection(ci[0].name).find();
      app.get('/', function(req,res){
        cursor.toArray(function(err,e){
          if(err) throw err;
          res.render('index.ejs', {name: e});
        });
      });
    });
    const cii = db.db('mydb').listCollections().toArray();
    console.log(cii);
*/
/*
    db.db('mydb').createCollection('mydbc', function(err,res) {
      if (err) throw err;
      console.log('Collection successfully created');
    });
*/

/*
    var myobj = {name: 'ABC Company Inc.', gender: 'Dundas 100'};
    var myobj1 = {name: 'DEF Company Inc.', gender: 'Trafalgar 200'};
    db.db('mydb').collection('mydbc').insertOne(myobj, function(err,res){
      if (err) throw err;
      console.log('The first document inserted');
    });
    db.db('mydb').collection('mydbc').insertOne(myobj1, function(err,res){
      if (err) throw err;
      console.log('The second document inserted');
    });
 
    const cursor = db.db('mydb').collection('mydbc').find();
    app.get('/', function(req,res) {
      cursor.toArray(function(err, result){
            if (err) throw err;
            res.render('index.ejs', {name: result});
      });
    })
  

    cursor.each(function(err, doc) {
        if (err) throw err;
        console.log(doc);

    });

}); 
*/
app.listen(port, () => {
  console.log("Server is listening on port " + port);
});

