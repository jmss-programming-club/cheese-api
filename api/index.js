
// It's 🧀 time

// Include dependencies
let express = require('express');
let app = express();
let http = require('http').createServer(app);
const webport = process.env.PORT || 8080;
const querystring = require('querystring');
const path = require('path');

// Setup static file directory
app.use(express.static("/../static"));

app.get("/", (req, res) => {
    res.sendFile(path.resolve(__dirname + "/../static/index.html"));
});

app.get("/stylesheet.css", (req, res) => {
    res.sendFile(path.resolve(__dirname + "/../static/stylesheet.css"));
})

app.get("/cheese/", (req, res) => {
    
    res.send(
        JSON.stringify({

            id: 001,
            name: 'Parmasean Cheese',
            flavor: 'tasty',
            emoji: '🧀'

        })
    )
    
});

// Listen for connections
http.listen(webport, function(){
    console.log('listening on *:' + webport);
});
