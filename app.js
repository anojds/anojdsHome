var express = require('express')


var app = express()
app.use('/static', express.static(__dirname + '/public'));

app.get('/', function(req,res) {
    res.sendFile(__dirname + "/public/main.html")
})

app.listen(3000, function() {
    console.log("start! express server on port 3000")
})