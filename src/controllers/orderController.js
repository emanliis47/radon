 const OrderModel= require("../models/orderModel")
 const ProductModel= require("../models/productModel")
 const UserModel= require("../models/userModel")
const createaOrder = async function(req, res){
    let orderDatas = req.body
    let isProductValid= await ProductModel.findOne({_id:orderDatas.userId})
    console.log(isProductValid)
    let isUserValid= await UserModel.findOne({_id:orderDatas.productId})
    console.log(isUserValid)
    if(isUserValid == null && isProductValid == null){
        res.send({msg: "userId and productId is mandatory"})
    }
    // if(isUserValid.isfreeappuser) {
        //     data.amount = 0;
        //     let createdData = await OrderModel.create(orderDatas)
        //     res.send({msg: createdData})

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