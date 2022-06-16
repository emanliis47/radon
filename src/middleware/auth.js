const jwt = require("jsonwebtoken");

const authenticate = async  function(req, res, next) {
  try{
     let token = req.headers["x-Auth-token"];
  if (!token) token = req.headers["x-auth-token"];
   if (!token) return res.status(401).send({ status: false, msg: "token must be present" });
   console.log(token);
    let decodedToken = jwt.verify(token, "SameerSweety2001@");
    if (!decodedToken)
      return res.status(403).send({ status: false, msg: "token is invalid" })}
      catch(err){
        console.log("This is the error:",  err.message)
        res.status(500).send({mgs: "Error", error: err.message})
      }

    next()
}


const authorise = function(req, res, next) {
  try{
    let userId = req.params.userId;
    let token = req.headers["x-Auth-token"];
   if (!token) token = req.headers["x-auth-token"];
   if (!token) return res.status(401).send({ status: false, msg: "token must be present" });
   console.log(token);
   let decodedToken = jwt.verify(token, "SameerSweety2001@");
  if (!decodedToken)
    return res.status(403).send({ status: false, msg: "token is invalid" })
    let tokenUserId =  decodedToken.userId
    if(tokenUserId != userId) return res.status(403).send({Status: false, msg: "You Can't Access It"})}
    catch(err){
      console.log("This is the error:",  err.message)
      res.status(500).send({mgs: "Error", error: err.message})
    }
     next()
}
module.exports.authorise= authorise
module.exports.authenticate= authenticate