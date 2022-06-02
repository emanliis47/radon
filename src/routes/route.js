const express = require('express');
const myHelper = require('../util/helper')
const underscore = require('underscore')
const router = express.Router();
router.get('/test-me', function (req, res) {
    myHelper.printDate()
    myHelper.getCurrentMonth()
    myHelper.getCohortData()
    let firstElement = underscore.first(['Sabiha','Akash','Pritesh'])
    console.log('The first element received from underscope function is '+firstElement)
    res.send('My first ever api!')
});

router.get('/hello', function (req, res) {
   
    res.send('Hello there!')
});
router.get("/sol2", function (req, res) {
    let arr= [33, 34, 35, 37, 38]
    function find_Missing1(arr){
        let sum1 = 0
        for(let y in arr ){
          sum1 += arr[y]
        }
        let z = arr.length + 1;
        Actual_Sum1 = Math.floor((z*(z+1))/2);
        return console.log(Actual_Sum1 - sum1)}
    res.send("Hi I Am Confused");
});
router.get("/sol1", function (req, res) {
    let a = [1, 2, 3, 5, 6, 7]
    function find_Missing(a){
  let sum = 0
  for(let x in a ){
    sum += a[x]
  }
  let y = a.length + 1;
  Actual_Sum = Math.floor((y*(y+1))/2);
  return console.log(Actual_Sum - sum)
}
    res.send("Thanks");
});

router.get('/candidates', function(req, res){
    console.log('Query paramters for this request are '+JSON.stringify(req.query))
    let gender = req.query.gender
    let state = req.query.state
    let district = req.query.district
    console.log('State is '+state)
    console.log('Gender is '+gender)
    console.log('District is '+district)
    let candidates = ['Akash','Suman']
    res.send(candidates)
})

router.get('/candidates/:canidatesName', function(req, res){
    console.log('The request objects is '+ JSON.stringify(req.params))
    console.log('Candidates name is '+req.params.canidatesName)
    res.send('Done')
})


module.exports = router;
// adding this comment for no reason