var express = require('express');
var app = express();

app.get('*', function (req, res) {

    res.send('Xuletre WebApp 1.0');
});

app.listen(8080, function () {
    console.log('Example app listening on port 8080!');
});