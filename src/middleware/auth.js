const jwt = require("jsonwebtoken");

const authenticate = async  function(req, res, next) {
     let token = req.headers["x-Auth-token"];
  if (!token) token = req.headers["x-auth-token"];
   if (!token) return res.send({ status: false, msg: "token must be present" });
   console.log(token);
    let decodedToken = jwt.verify(token, "SameerSweety2001@");
    if (!decodedToken)
      return res.send({ status: false, msg: "token is invalid" });

    next()
}


const authorise = function(req, res, next) {
    let userId = req.params.userId;
    let token = req.headers["x-Auth-token"];
   if (!token) token = req.headers["x-auth-token"];
   if (!token) return res.send({ status: false, msg: "token must be present" });
   console.log(token);
   let decodedToken = jwt.verify(token, "SameerSweety2001@");
  if (!decodedToken)
    return res.send({ status: false, msg: "token is invalid" })
    let tokenUserId =  decodedToken.userId
    if(tokenUserId != userId) return res.send({Status: false, msg: "You Can't Access It"})
     next()
}
module.exports.authorise= authorise
module.exports.authenticate= authenticate