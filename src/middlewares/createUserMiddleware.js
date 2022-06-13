const userValidator = function(req, res, next){
    const freepaidData= req.headers.isFreeAppUser
    console.log(freepaidData)
    if( freepaidData === null || freepaidData === undefined){
        res.send({msg: "error message that the request is missing a mandatory header"})
    } else{
        next()}
}
module.exports.userValidator = userValidator