const mongoose=require("mongoose")
const schema=mongoose.Schema

const productSchema = new schema({
 name:String,
 img:String,
 price:Number,
 description:String,
 category:String

    


    
  });
  const Product = mongoose.model('Product', productSchema);
  module.exports = Product;