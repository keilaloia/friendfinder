var friendata = require("../data/friend");

module.exports = function(app)
{
    app.get("/api/friends", function (req, res) {
        res.json(friendata);
    });


    app.post("/api/friends", function(req, res) {
        // req.body hosts is equal to the JSON post sent from the user
        // This works because of our body parsing middleware
        var newfriend = req.body;
        var cur = 100;
        var answer = "";
        for (let i = 0; i < friendata.length; i++) {
            var check = 0;
            for (let j = 0; j < friendata[i].scores.length; j++) {
                check += Math.abs(friendata[i].scores[j] - newfriend.scores[j]);
                
            }
            if(check < cur)
            {
                cur = check;
                answer = friendata[i];
            }
        }

        console.log("your bestie is" + answer.name);
        console.log("your bestie is" + answer.photo);

        friendata.push(newfriend);
      
        res.json(friendata);
      });
      
      
    // app.post("/api/friends", function (req, res) {
    //     res.json(friendata);
    // });
}