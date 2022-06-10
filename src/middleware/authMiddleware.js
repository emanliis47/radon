const requestIp = require("request-ip")
const moment =require("moment")

const md1 = function(req, res, next){
    const pathName = req.path;
    const clintIp = requestIp.getClientIp(req);
   let todays = moment().format();
   console.log(todays+" "+ clintIp+" "+ pathName)
  next()
 };
 module.exports.md1= md1