const mongoose=require('mongoose');

const productSchema=new mongoose.Schema({
    name:{type:String, required:true, minlength:3},
   price: {type:Number,required:true},
category:{type:mongoose.Schema.Types.ObjectId,required:true,ref:"category"}
})


const productModel=mongoose.model("product",productSchema);
module.exports=productModel;