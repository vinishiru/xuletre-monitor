var express = require('express');
var os = require("os");

var app = express();

app.get('*', function (req, res) {
    var hostname = os.hostname();
    res.send(`Xuletre Monitor 2.0 - Hostname: ${hostname}`);
});

app.listen(8090, function () {
    console.log('Example app listening on port 8090!');
});