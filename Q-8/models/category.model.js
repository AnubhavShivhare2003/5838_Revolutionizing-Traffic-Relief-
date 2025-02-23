const mongoose=require('mongoose');

const categorySchema=new mongoose.Schema({
    name: {type:String,required:true, minlength:3 },
    description:String
})

const categoryModel=mongoose.model('category',categorySchema);

module.exports=categoryModel;