const mongoose = require('mongoose');

const url= "mongodb+srv://wangzeb:Weijie0808!@cluster0-un6g7.mongodb.net/life";


mongoose.connect(url, { useUnifiedTopology: true ,useNewUrlParser:true});
const conn = mongoose.connection;
const Schema = mongoose.Schema;

const productSchema = new Schema({
  id: String,
  name:String
});

const ProductModel = mongoose.model('products',productSchema);

module.exports={mongoose,productSchema,ProductModel};
