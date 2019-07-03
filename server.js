var express = require("express");
var app = express();

var PORT = 3000;

app.get(`/`, function(req, res)
{
    res.send(`hello joe`);
})

app.listen(PORT, function()
{
    console.log("listening on" + PORT);
})
