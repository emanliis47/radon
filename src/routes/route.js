const express = require('express');
const router = express.Router();

/*Create an API for GET /movies that returns a list of movies. Define an array of movies in your code and return the value in response.*/

router.get('/movies', function(req, res){
    const movieList = ["A Perfect Pairing", "Senior Year", "Jackass 4.5", "Dangerous", "	Sonic the Hedgehog", "	Top Gun", "Cleveland Abduction", "Turbo"]
    res.send(movieList)
});

/*Create an API GET /movies/:indexNumber (For example GET /movies/1 is a valid request and it should return the movie in your array at index 1). You can define an array of movies again in your api */

router.get('/movies/:indexNumber', function(req, res){
    const movieOfList = ["A Perfect Pairing", "Senior Year", "Jackass 4.5", "Dangerous", "	Sonic the Hedgehog", "	Top Gun", "Cleveland Abduction", "Turbo"]
    var i = req.params.indexNumber
    var j = i - 1
    if(i <= movieOfList.length){
        res.send(movieOfList[j])
        
            } else{
                res.send("Invalid List")
            }
}); 

router.get('/films', function(req, res){
    const movieComp = [{Name:"A Perfect Pairing", id: 1}, {Name:"Senior Year", id: 2}, {Name:"Jackass 4.5", id: 3}, {Name:"Dangerous", id: 4}, {Name:"Sonic the Hedgehog", id: 5}];
    res.send(movieComp)
}); 

       

module.exports = router;
// adding this comment for no reason