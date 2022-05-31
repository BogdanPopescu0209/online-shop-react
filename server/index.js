const express = require('express');
const app = express();
const ObjectID = require('mongodb').ObjectId;
const cors = require('cors');
var path = require("path");
var fs = require("fs");
app.use(cors());
app.use(express.json());

const MongoClient = require('mongodb').MongoClient;

let db;

const mongodbUser = '';
const mongodbPassword = '';
const mongodbDatabase = '';

MongoClient.connect('mongodb+srv://' + mongodbUser + ':' + mongodbPassword + '@store.8x5cl.mongodb.net/', (error, client) => {
    db = client.db(mongodbDatabase)
})

app.param('collectionName', (request, response, next, collectionName) => {
    request.collection = db.collection(collectionName)
    return next()
})

app.use(function (request, response, next) {
    console.log('Request IP: ' + request.url)
    console.log('Request date: ' + new Date())
    next()
})

app.use('/static', function (req, res, next) {

    var filePath = path.join(__dirname, "static", req.url);

    fs.stat(filePath, function (err, fileInfo) {
        if (err) {
            next();
            return;
        }
        if (fileInfo.isFile()) res.sendFile(filePath);
        else next();
    });
});

app.get('/', (request, response, next) => {
    response.send('Welcome to express server!')
})

app.get('/collection/:collectionName', (request, response, next) => {
    request.collection.find({}).toArray((error, results) => {
        if (error) return next(error)
        response.send(results)
    })
})

app.post('/collection/:collectionName', (request, response, next) => {
    request.collection.insert(request.body, (error, results) => {
        if (error) return next(error)
        response.send(results)
    })
})

app.get('/search/:collectionName/:searchItem', (request, response, next) => {

    let query = { brand: request.params.searchItem };
    
    request.collection.find(query).toArray((error, results) => {
        if (error) return next(error)
        response.send(results)
    })
})

app.get('/sortlowtohigh/collection/:collectionName', (request, response, next) => {

    let mysort = { price: 1 };

    request.collection.find().sort(mysort).toArray((error, results) => {
        if (error) return next(error)
        response.send(results)
    })
})

app.get('/sorthightolow/collection/:collectionName', (request, response, next) => {

    let mysort = { price: -1 };

    request.collection.find().sort(mysort).toArray((error, results) => {
        if (error) return next(error)
        response.send(results)
    })
})

app.listen(8000);
