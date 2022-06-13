const ProductModel= require("../models/productModel")
const createProduct = async function(req, res){
    const productData = req.body
    const yepCreateProducts = await ProductModel.create(productData)
    res.send({mgs: yepCreateProducts})
}
module.exports.createProduct= createProduct