// Create web server
var express = require('express');
var app = express();
// Add middleware
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// Add route
app.post('/comment', function (req, res, next) {
    var comment = req.body.comment;
    if (comment) {
        res.send('Thanks for your comment!');
    }
    else {
        next();
    }
});
// Add route
app.post('/comment', function (req, res, next) {
    var skills = req.body.skills;
    if (!skills) {
        req.body.skills = [];
    }
    else {
        if (typeof skills === 'string') {
            req.body.skills = skills.split(',');
        }
    }
    next();
});
// Add route
app.post('/comment', function (req, res) {
    var comment = req.body.comment;
    var skills = req.body.skills;
    res.send("Comment: " + comment + "<br>Skills: " + skills.join(','));
});
// Start web server
var port = process.env.PORT || 8080;
app.listen(port, function () { return console.log("Listening on port " + port); });



















