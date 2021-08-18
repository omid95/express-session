const express = require('express');
const session = require('express-session');
const MemoryStore = require('memorystore')(session)
const app = express();
app.set('views', './');
app.set('view engine', 'ejs');
app.use(
    session(
        {
            secret: 'This is a secret',
            cookie: { maxAge: 86400000 },
            saveUninitialized: true,
            resave: false,
            store: new MemoryStore({
                checkPeriod: 86400000 // prune expired entries every 24h
            })
        }
    )
);


app.get('/',
    (req, res) => {

        console.log(req.sessionID);
        // console.log(req.session);
        console.log(req.sessionStore);
        res.render('index.ejs');
        // res.send('Hello World');


    }

);

app.post('/',
    (req, res) => {

        //console.log(req.sessionID);
        // console.log(req.session);
        //console.log(req.sessionStore);
        //user--> client
        //adds item
        //let server know that there is an update


        req.sessionStore.Cart = { cartname: "omid" }
        console.log(req.sessionStore);
        console.log("it is a post!");
        res.send('Post had happended');

    }

);

var server = app.listen(
    8081,
    function () {
        var host = server.address().address;
        var port = server.address().port;
        console.log("Example app listening at http://%s:%s", host, port)
    }
);