const mongoose=require('mongoose');
const Schema=mongoose.Schema;

let registerSchema=new Schema({
    email:String,
    firstName:String,
    lastName:String,
    countryCode:Number,
    contact:String,
    password:String,
    salt:String,
    isVerified: { type: Boolean, default: false },
    isBlocked: { type: Boolean, default: false },
    isDeleted: { type: Boolean, default: false },
    createdAt:{type:Date,default:Date.now()}
})

module.exports=mongoose.model('register',registerSchema);