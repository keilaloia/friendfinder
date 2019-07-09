var express = require("express");
var path = require("path");

var app = express();
var PORT = process.env.PORT || 3000;

//set up server to parse data
app.use(express.urlencoded({extended: true}))   
app.use(express.json());
//grab user input and send closest data point back to user


require("./app/routing/apiRoutes.js")(app);
require("./app/routing/htmlRoutes")(app);

app.listen(PORT, function()
{
    console.log("listening on" + PORT);
})



// app.get("/", function (req, res) {
//     res.sendFile(path.join(__dirname, "app/public/home.html"));
// });

