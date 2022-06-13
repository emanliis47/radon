 const OrderModel= require("../models/orderModel")
 const ProductModel= require("../models/productModel")
 const UserModel= require("../models/userModel")
const createaOrder = async function(req, res){
    let orderDatas = req.body
    let actualData= req.body.productId
    let actuallData = req.body.userId
    let isProductValid= await ProductModel.findById({_id: actualData})
    console.log(isProductValid)
    let isUserValid= await UserModel.findById({_id: actuallData})
    console.log(isUserValid)
    if(isUserValid == null || isProductValid == null){
        res.send({msg: "userId and productId is mandatory"})
    }
        if (isProductValid.price > isUserValid.balance){

            console.log("Insufficient Balance")
            res.send({msg: "Insufficient Balance"})

        } else {
            orderDatas.amount = isProductValid.price
            let isUserValids = isUserValid.balance - isProductValid.price
            console.log(isUserValids)
            let usersId = isUserValid._id.toString();
            await UserModel.findByIdAndUpdate(usersId, {balance: isUserValid.balance})
            let createaOrder = await OrderModel.create(orderDatas)
            res.send({msg: createaOrder})
           
          
        }

    }
   
    


module.exports. createaOrder=  createaOrder