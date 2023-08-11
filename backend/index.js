const express = require('express');
const app = express();
const config = require('./config');
const Article = require('./models/article');
const Subscriber = require('./models/subscriber')
const FunFact = require('./models/fun_fact')
const cors = require('cors');

//A Threat
app.use(cors());

//middleware
app.use(express.urlencoded({extended:false}));

//testing database (connected)
config.authenticate().then(() => {
    console.log('Database is Connected!');
}).catch((err) => {
    console.log(err);
});

//get article data (working)
app.get('/article', function(req, res){
    Article.findAll().then((results) => {
        res.status(200).send(results);
    }).catch((err) => {
        res.status(500).send('err')
    });
});

//get fun_fact data
app.get('/fun_fact', function(req, res){
    FunFact.findAll().then((results) => {
        res.status(200).send(results);
    }).catch((err) => {
        res.status(500).send(err)
    });
});

//get subscriber data (working)
app.get('/subscriber', function(req, res){
    Subscriber.findAll().then((results) => {
        res.status(200).send(results);
    }).catch((err) => {
        res.status(500).send('err')
    });
});

//Server running on port (working)
app.listen(3000, function(){
    console.log('Server Running on port 3000...')
});