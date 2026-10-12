 const mongoose = require("mongoose")

 const productSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true , "Название обязательно!"], 
        trim: true
    },
    description: {
        type:String,
        required:  [true , "Описание обязательно!"],
        trim: true
    },
    price: {
        type: Number,
        required: [true , "Цена обязательна!"],
        min: 0
    }
 })

 module.exports = mongoose.model('Product' , productSchema)