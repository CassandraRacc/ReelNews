const express = require('express');
const app = express();
const config = require('./config');
const Article = require('./models/article');
const Subscribe = require('./models/subscribe');
const FunFact = require('./models/fun_fact');
const Category = require('./models/category');
const cors = require('cors');

//A Threat
app.use(cors());

//middleware
app.use(express.urlencoded({ extended: false }));

//json
app.use(bodyparser.json());

//testing database (connected)
config.authenticate().then(() => {
    console.log('Database is Connected!');
}).catch((err) => {
    console.log(err);
});

//article / fun fact connection
FunFact.belongsTo(Article, {
    foreignKey: 'article_id'
});

//article / category connection
Category.hasMany(Article, {
    foreignKey: 'category_id'
});

//get article data (working)
app.get('/article', function (req, res) {
    Article.findAll().then((results) => {
        res.status(200).send(results);
    }).catch((err) => {
        res.status(500).send(err)
    });
});

app.get('/categories', function (req, res) {
 
    let data = {
        include:[Article]
    }
        Category.findAll(data).then((results) => {
            res.send(results)
        }).catch((err) => {
            res.status(500).send(err);
        });

});

//get articles based on category
// app.get('/article/:category', function (req, res){
//   const category = parseInt(req.params.category);

//  Category.findBy(category)
//.then((result) => {
//    if(result){
//        res.status(200).send(result);
//    } else {
//        res.status(404).send('Category Not Found');
//    }
//})
//.catch((err) => {
//    res.ststus(500).send(err);
//});
// });

//filter function (working)
app.get('/filter', function (req, res) {
    let data = {
        where: {}
    };

    if (req.query.category !== undefined) {
        data.where.category = req.query.category;
    }

    Article.findAll(data).then((output) => {
        res.status(200).send(output);
    }).catch((err) => {
        res.status(500).send('err')
    });

})

//get fun_fact data (working)
app.get('/fun_fact', function (req, res) {
    FunFact.findAll().then((results) => {
        res.status(200).send(results);
    }).catch((err) => {
        res.status(500).send(err)
    });
});

//get subscriber data (working)
app.get('/subscribe', function (req, res) {
    Subscribe.findAll().then((results) => {
        res.status(200).send(results);
    }).catch((err) => {
        res.status(500).send('err')
    });
});

//post new subscriber
app.post('/subscriber', function(req,res){

    let formData = req.body;

    Subscribe.create(formData).then((results) => {
        res.status(200).send(results);
    }).catch((err) => {
        res.status(500).send(err);
    });
});

//Server running on port (working)
app.listen(3000, function () {
    console.log('Server Running on port 3000...')
});