import mongoose from "mongoose";

export const connectdb = async () =>{
    await mongoose.connect('mongodb+srv://DilBahaur:mondodb143@cluster0.yrc2rsi.mongodb.net/CakeShopping').then(()=>console.log("DB Connected"));
}