const mongoose=require("mongoose")
const schema=mongoose.Schema

const commandeSchema = new schema({
  id_user:String,
 name_user:String,
 phone_user:String,
 name_product:String,
 img_product:String,
 price_product:Number,
 description:String,
 qte:Number,
 color:String,
 size:String, 
 date:String,
status:{type:String, default:"non confirmé"}

    


    
  });
  const Commande = mongoose.model('Commande', commandeSchema);
  module.exports = Commande;